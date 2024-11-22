Workshop NextJS 15 Camping สู้ๆ ครับทุกๆ คน
EP1 ติดตั้ง NextJS15 & Shadcn
npx create-next-app@latest camp

npx shadcn@latest init -d
npx shadcn@latest add button
EP2 ติดตั้ง Navbar
npx shadcn@latest add input
EP3 Darkmode
https://ui.shadcn.com/docs/dark-mode/next
npm install next-themes
EP4 Profile Button
type NavLinks = {
  href: string;
  label: string;
};

export const links: NavLinks[] = [
  { href: "/", label: "Home" },
  { href: "/favorits", label: "Favorits" },
  { href: "/camp", label: "Camp" },
];
EP 5 Clerk Authentication
Clerk จัดการผู้ใช้งาน
https://clerk.com/
---- Middleware ----
https://clerk.com/docs/references/nextjs/clerk-middleware
EP 6 Toast & SignIn, SignOut
npx shadcn@latest add toast
EP 7 Form
1. form
2. Action
3. แยก components
4. Props, types
5. Send to Server action
6. Validate with zod
7. connect db (supabase)
8. insert to db (supabase)
https://clerk.com/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL='/profile/create'
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL='/profile/create'
EP8 FromInput
// rafce
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name}> {label} </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default FormInput;