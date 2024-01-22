import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import React from 'react'
import PageContainer from "./page-container"
import { HeaderNavigation } from "./ui/header-navigation"
import ProfileButton from "./profile-button"
import { ThemeMode } from "./theme-mode"
import ResponsiveMenu from "./responsive-menu"



export default function Header() {
  return (
    <header className="p-4 border-b">
        <PageContainer>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <ResponsiveMenu />
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">NextBlog</h1>
            </div>
            <HeaderNavigation />

            <div className="flex items-center gap-7">
              <ThemeMode />
              <ProfileButton />

            </div>
          </div>
          
        </PageContainer>

    </header>
  )
}
