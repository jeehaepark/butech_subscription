import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AuthCard } from "@/components/auth-card";

export default function SignupPage() {
  return <main className="flex min-h-screen flex-col bg-[#f7f8fa]"><SiteHeader /><div className="flex flex-1 justify-center px-5 pb-12 pt-16"><AuthCard mode="signup" /></div><SiteFooter /></main>;
}