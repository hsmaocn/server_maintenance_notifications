import MaintenanceNotice from "@/components/MaintenanceNotice"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <MaintenanceNotice />
      <Footer />
    </div>
  )
}

