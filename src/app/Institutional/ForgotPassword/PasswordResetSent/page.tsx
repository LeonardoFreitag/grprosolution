'use client'
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function PasswordResetSent() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md">
        <CheckCircle className="w-16 h-16 text-green-500" />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          E-mail enviado com sucesso!
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Se um e-mail associado a esta conta existir, você receberá um link para redefinir sua senha em breve.
        </p>
        <button className="mt-6 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-700 transition durantion 300" onClick={() => router.push("/Institutional/SignIn")}>
          Página de Login!
        </button>
      </div>
    </div>
  );
}
