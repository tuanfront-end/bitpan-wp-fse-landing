import { BUY_LINK, DEMO_URL } from '@/constant/constant'
import { Button } from './button'
import { Subheading } from './text'

export default function CallToAction({ className }: { className?: string }) {
  return (
    <div
      className={`relative pb-16 pt-20 text-center sm:py-24 ${className ?? ''}`}
    >
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-5 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Get <i className="font-playfair-display">started</i> today.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-sm text-sm/6 text-gray-500">
        It’s time to improve your website. Buy the Bitpan theme so you can feel
        like you’re doing something productive.
      </p>
      <div className="mt-6">
        <div className="mt-12 flex flex-col items-center justify-center gap-x-6 gap-y-4 sm:flex-row">
          <Button href={BUY_LINK} target="_blank">
            Buy theme
          </Button>
          <Button variant="secondary" href={DEMO_URL} target="_blank">
            Live demo
          </Button>
        </div>
      </div>
    </div>
  )
}
