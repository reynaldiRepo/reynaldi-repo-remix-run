import type { LoaderArgs } from "@remix-run/node"
export async function loader({ request }: LoaderArgs) {
    return {
        msg: "Not Allowed"
    }
};

import type { ActionArgs, redirect } from "@remix-run/node"
import { sendEmailContactForm } from "~/util/smtp";
export async function action({ request }: ActionArgs) {
    const formData = await request.formData();
    let email = formData.get("email")?.toString();
    let name = formData.get("name")?.toString();
    let msg = formData.get("msg")?.toString();
    let lifetime = formData.get("lifetime")?.toString();

    if (!email) {
        return {
            status: 401,
            msg: "Email required"
        }
    }
    if (!name) {
        return {
            status: 401,
            msg: "Email required"
        }
    }

    if (!msg) {
        return {
            status: 401,
            msg: "Please insert your message"
        }
    }

    if (!lifetime) {
        return {
            status: 401,
            msg: "Bot Detected"
        }
    }

    let _lifetime = 0;
    try {
        _lifetime = Number.parseInt(lifetime)
    } catch (error) {
        console.log(error)
        _lifetime = 0;
    }

    if (_lifetime < 3) {
        return {
            status: 401,
            msg: "Bot Detected"
        }
    }

    try {
        await sendEmailContactForm(email, name, msg);   
        return {
            status: 200,
            msg: "Thank you for your message! We have received it and will be in touch shortly."
        }
    } catch (error) {
        return {
            status: 500,
            msg: "Something wrong, pleae try again."
        }
    }
};