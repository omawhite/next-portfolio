import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { renderBody, createClient } from "@/lib/oauth2";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");
	const host = request.headers.get("host");

	if (!code || !host) {
		return NextResponse.json(
			{ error: "Missing required parameters" },
			{ status: 400 },
		);
	}

	const oauthClient = createClient();

	try {
		const accessToken = await oauthClient.getToken({
			code,
			redirect_uri: `https://${host}/api/callback`,
			scope: "repo,user",
		});

		return new NextResponse(
			renderBody("success", {
				token: accessToken.token.access_token,
				provider: "github",
			}),
			{ status: 200 },
		);
	} catch (e) {
		return new NextResponse(renderBody("error", e), { status: 200 });
	}
}
