import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MaintenanceNotice() {
  return (
    <Card className="w-full max-w-2xl bg-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">服务器维护通知</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-600">
        <p>尊敬的客户：</p>
        <p>
          首先，感谢您的耐心等待与理解。我们深知这份突然的不便可能让您感到困惑，但请允许我们向您解释一下当前的情况。
        </p>
        <p>
          目前，我们的服务器正在进行必要的维护工作，以确保我们能够继续为您提供更稳定、更高效的服务。我们深知这可能会给您带来一些不便，但请您放心，我们的团队正在全力以赴，以最快的速度完成这些工作。
        </p>
        <p>
          我们非常重视您的体验和满意度，因此，我们已经采取了一切必要的措施来缩短维护时间，并确保所有功能在恢复后能够正常运行。我们预计服务器将在短时间内恢复正常，届时您将能够再次访问我们的网站，并享受到我们提供的所有服务。
        </p>
        <p>如果您有任何疑问或需要进一步的帮助，请随时与我们联系。我们的客户支持团队将随时待命，为您提供所需的协助。</p>
        <p>再次感谢您的理解和耐心。我们期待在服务器维护完成后，继续为您提供卓越的服务体验。</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="default">了解更多</Button>
      </CardFooter>
    </Card>
  )
}

