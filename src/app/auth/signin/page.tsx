import Signin from "@/components/auth/Signin";
import { useGetUserDataServer } from "@/hooks/get-user/useGetUserServer";
import { redirect } from "next/navigation";

const SigninPage = async () => {
	const data = await useGetUserDataServer();
	if (data) {
		redirect("/");
	}
	return <Signin />;
};

export default SigninPage;
