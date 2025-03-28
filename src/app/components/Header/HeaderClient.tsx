'use client'
import { AuthContext } from '@/app/hooks/AuthContext'
import { Bell, LogOut, UserPlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export function HeadeClient() {
  const router = useRouter()
  const { signOut, user } = useContext(AuthContext)
  const handleSignOut = () => {
    signOut()
    console.log('SignOut')
  }

  return (
    <div className="flex justify-center bg-slate-100 w-full h-20 items-center">
      <div className="flex flex-row justify-between border-r-2  h-full w-full">
        <div className="flex flex-row pl-3 items-center bg-green-500 w-72">
          <h1 className="text-2xl font-bold text-black">GRPro</h1>
          <h1 className="text-2xl font-bold text-amber-300">.Solution</h1>
        </div>
        <div className="flex gap-7 mr-3 flex-row items-center">
          <Bell size={24} color="black" />
          <UserPlus size={24} color="black" />
          <span className="border-l border-gray-300 h-6"></span>
          <div className="grid justify-center items-center text-end text-sm">
            <span className="">{user?.user.name}</span>
            <span className="">{user?.user.email}</span>
          </div>
          <div className="flex gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/58892147?v=4"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button className="ml-3" onClick={() => handleSignOut()}>
              <LogOut
                size={24}
                color="black"
                className="hover:text-yellow-400 transition duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
