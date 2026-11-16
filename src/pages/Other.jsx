import { otherItems } from '../content/other'
import Img from '../components/Img'
import usePageTitle from '../usePageTitle'

export default function Other() {
  usePageTitle('Other | Harman Gill')

  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
      <h1 className="text-5xl font-bold sm:text-6xl">Other</h1>
      <p className="mt-4 max-w-[34rem] text-slate">
        A few things from outside client work
      </p>

      <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2">
        {otherItems.map((item) => (
          <article key={item.title}>
            <Img
              src={item.image}
              alt={item.imageAlt}
              ratio="aspect-[4/3]"
              fit={item.contain ? 'object-contain p-8 bg-mist' : 'object-cover'}
            />
            <h2 className="mt-5 text-2xl font-bold">{item.title}</h2>
            <p className="mt-2 max-w-[32rem]">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
