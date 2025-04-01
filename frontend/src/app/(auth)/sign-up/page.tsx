import  SignUpForm  from "@/components/sign-up";

export default function SignUpPage() {
    return (
        <div className="w-full mx-auto background-image:radial-gradient(circle_500px_at_50%_420px,#38461b,transparent),linear-gradient(rgba(178,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(178,255,20,0.05)_1px,transparent_1px)] [background-size:100%_100%,50px_50px,50px_50px]">
            <SignUpForm />
        </div>
    );
}