"use client";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, type SignInFormValues } from "@/lib/form-schema";
import { Button as MovingBorderButton } from "./ui/moving-border";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "@/lib/auth-client"; // Import signIn directly
import { Checkbox } from "./ui/checkbox";
import { createAuthClient } from "better-auth/client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const encodedCallbackUrl = encodeURIComponent(callbackUrl ?? "");

  const router = useRouter();

  const authClient = createAuthClient();

  const signInWithGoogle = async () => {
    try {
      await authClient.signIn.social(
        {
          provider: "google",
        },
        {
          onRequest: () => {
            toast.loading("Connecting to Google...", {
              id: "googleSignInToast",
            });
          },
          onSuccess: () => {
            toast.success("Signed in with Google successfully!", {
              id: "googleSignInToast",
            });
            router.push(callbackUrl ?? "/");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message ?? "Failed to sign in with Google", {
              id: "googleSignInToast",
            });
            console.error("Google sign-in error:", ctx.error);
          },
        }
      );
    } catch (error: any) {
      console.error("Unexpected error during Google sign-in:", error);
      toast.error(
        error?.message || "An unexpected error occurred. Please try again."
      );
    }
  };

  const openSignUpPage = () => {
    if (!callbackUrl) {
      router.push("/sign-up");
    } else {
      router.push(`/sign-up?callbackUrl=${encodedCallbackUrl}`);
    }
  };

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    startTransition(async () => {
      try {
        const { email, password, rememberMe } = values;

        await signIn.email(
          {
            email,
            password,
            rememberMe,
          },
          {
            onRequest: () => {
              toast.loading("Signing in...", { id: "signInToast" });
            },
            onSuccess: () => {
              toast.success("Signed in successfully!", {
                id: "signInToast",
              });
              form.reset();
              router.push(callbackUrl ?? "/");
            },
            onError: (ctx) => {
              toast.error(ctx.error.message ?? "Invalid credentials", {
                id: "signInToast",
              });

              if (ctx.error.code === "invalid_credentials") {
                form.setError("password", {
                  message: "Invalid email or password",
                });
              } else {
                form.setError("root", {
                  message: ctx.error.message || "Failed to sign in",
                });
              }

              console.error("Sign-in error:", ctx.error);
            },
          }
        );
      } catch (error: any) {
        console.error("Unexpected error during sign-in:", error);
        toast.error(
          error?.message || "An unexpected error occurred. Please try again."
        );
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-gray-50 relative before:absolute before:w-full before:h-full before:bg-[radial-gradient(circle_500px_at_50%_420px,#38461b,transparent)] before:z-[-1]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-8 text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-t from-gray-300 via-[#b1ff14ea] to-[#b2ff14] bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="max-w-3xl text-gray-300 text-xl">
            Sign in to your account to continue your coding journey.
          </p>
        </div>

        <Card className="w-full max-w-xl mx-auto shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 relative overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#b2ff14]">
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-center text-gray-300">
              Enter your credentials below to sign in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#b2ff14]">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            {...field}
                            className="pl-10 bg-gray-800 border-gray-700 text-gray-200 focus:ring-[#b2ff14] focus:border-[#b2ff14]"
                            disabled={isPending}
                          />
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#b2ff14]">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            {...field}
                            className="pl-10 bg-gray-800 border-gray-700 text-gray-200 focus:ring-[#b2ff14] focus:border-[#b2ff14]"
                            disabled={isPending}
                          />
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <div
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Remember Me Checkbox */}
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-[#b2ff14] data-[state=checked]:text-black"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-300">
                          Remember me
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Error message */}
                {form.formState.errors.root && (
                  <div className="text-sm font-medium text-red-400 bg-red-900/20 p-3 rounded-md">
                    {form.formState.errors.root.message}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-center">
                  <MovingBorderButton
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-black text-[#b2ff14] text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#b2ff14] hover:text-black hover:bg-[#b2ff14] font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                    borderRadius="0.75rem"
                  >
                    {isPending ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </div>
                    ) : (
                      "Sign in"
                    )}
                  </MovingBorderButton>
                </div>
              </form>
            </Form>
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center items-center">
              <Button
                type="button"
                onClick={signInWithGoogle}
                disabled={isPending}
                className="w-full bg-white text-gray-900 text-lg transition-all duration-300 font-semibold disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:text-white"
              >
                <FcGoogle className="h-5 w-5" />
                Sign in with Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t border-gray-700 pt-4">
            <div className="text-sm text-center text-gray-400">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openSignUpPage();
                }}
                className="text-[#b2ff14] hover:underline font-medium"
              >
                Sign up
              </a>
            </div>
            <div className="text-sm text-center">
              <a
                href="/forgot-password"
                className="text-[#b2ff14] hover:underline font-medium"
              >
                Forgot your password?
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;
