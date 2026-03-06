import { createClient } from "@/lib/supabase/server";
import { HomePage } from "@/app/_components/home/HomePage";

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let isPremium = false;
  if (user) {
    const { data } = await supabase
      .from("subscriptions")
      .select("status")
      .eq("user_id", user.id)
      .single();
    isPremium = data?.status === "active";
  }

  return <HomePage user={user} isPremium={isPremium} />;
}
