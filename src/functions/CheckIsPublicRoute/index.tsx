import { APP_ROUTES } from "@/app/Constants/app-routes"

export const chekIsPlublicRoute = (asPath: string): boolean => {
    const publicroutes = Object.values(APP_ROUTES.public)
    return publicroutes.some((route) => route === asPath)
  }