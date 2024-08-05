import { useRouter } from "next/navigation";

const useUpdateUrlParams = () => {
	const router = useRouter();

	const UpdateUrlParams = (key: string, value: string) => {
		const params = new URLSearchParams(window.location.search);
		params.set(key, value);
		router.push(`${window.location.pathname}?${params.toString()}`);
	};
	return {
		UpdateUrlParams,
	};
};

export default useUpdateUrlParams;
