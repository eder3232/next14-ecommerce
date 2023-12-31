import MaxWidthWrapper from '@/shared/components/max-width-wrapper'

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Your marketplace for high-quality{' '}
            <span className="font-bold text-primary">digital assets.</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.{' '}
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
