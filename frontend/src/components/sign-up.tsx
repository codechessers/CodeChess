"use client";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, type SignUpFormValues } from "@/lib/form-schema";
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
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { signUp } from "@/lib/auth-client"; // Import signUp directly

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const encodedCallbackUrl = encodeURIComponent(callbackUrl ?? "");
  
  const router = useRouter();

  const openLoginPage = () => {
    if (!callbackUrl) {
      router.push("/sign-in");
    } else {
      router.push(`/sign-in?callbackUrl=${encodedCallbackUrl}`);
    }
  };

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: SignUpFormValues) => {
    startTransition(async () => {
      try {
        const { email, password, name } = values;
        
        await signUp.email(
          {
            email,
            password,
            name,
          },
          {
            onRequest: () => {
              toast.loading("Creating account...", { id: "signUpToast" });
            },
            onSuccess: () => {
              toast.success("Account created successfully!", {
                id: "signUpToast",
              });
              form.reset();
              router.push("/sign-in");
            },
            onError: (ctx) => {
              toast.error(ctx.error.message ?? "Something went wrong.", {
                id: "signUpToast",
              });
              
              if (ctx.error.code === "email_already_exists") {
                form.setError("email", {
                  message: "This email is already registered.",
                });
              } else if (ctx.error.code === "password_too_weak") {
                form.setError("password", {
                  message: "This password is too weak.",
                });
              } else {
                form.setError("root", {
                  message: ctx.error.message || "Failed to create account.",
                });
              }
              
              console.error("Sign-up error:", ctx.error);
            },
          }
        );
      } catch (error: any) {
        console.error("Unexpected error during sign-up:", error);
        toast.error(error?.message || "An unexpected error occurred. Please try again.");
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-gray-50 relative before:absolute before:w-full before:h-full before:bg-[radial-gradient(circle_500px_at_50%_420px,#38461b,transparent)] before:z-[-1]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-8 text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-t from-gray-300 via-[#b1ff14ea] to-[#b2ff14] bg-clip-text text-transparent">
            Join the Challenge
          </h1>
          <p className="max-w-3xl text-gray-300 text-xl">
            Create your account and start competing in thrilling coding
            competitions today.
          </p>
        </div>

        <Card className="w-full max-w-xl mx-auto shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 relative overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#b2ff14]">
              Create an account
            </CardTitle>
            <CardDescription className="text-center text-gray-300">
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#b2ff14]">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="John Doe"
                            autoComplete="name"
                            {...field}
                            className="pl-10 bg-gray-800 border-gray-700 text-gray-200 focus:ring-[#b2ff14] focus:border-[#b2ff14]"
                            disabled={isPending}
                          />
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

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
                            autoComplete="new-password"
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
                      <FormDescription className="text-xs text-gray-400">
                        Password must contain at least 8 characters, including
                        uppercase, lowercase, number and special character.
                      </FormDescription>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#b2ff14]">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            autoComplete="off"
                            {...field}
                            className="pl-10 bg-gray-800 border-gray-700 text-gray-200 focus:ring-[#b2ff14] focus:border-[#b2ff14]"
                            disabled={isPending}
                          />
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <div
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
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
                        Creating account...
                      </div>
                    ) : (
                      "Create account"
                    )}
                  </MovingBorderButton>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t border-gray-700 pt-4">
            <div className="text-sm text-center text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openLoginPage();
                }}
                className="text-[#b2ff14] hover:underline font-medium"
              >
                Sign in
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;
