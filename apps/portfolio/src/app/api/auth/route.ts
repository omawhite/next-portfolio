import crypto from "node:crypto";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/oauth2";

const randomString = () => crypto.randomBytes(4).toString("hex");

export async function GET(request: NextRequest) {
	const host = request.headers.get("host");

	if (!host) {
		return NextResponse.json(
			{ error: "Host header is required" },
			{ status: 400 },
		);
	}

	const oauthClient = createClient();

	const url = oauthClient.authorizeURL({
		redirect_uri: `https://${host}/api/callback`,
		scope: "repo,user",
		state: randomString(),
	});

	return NextResponse.redirect(url);
}
