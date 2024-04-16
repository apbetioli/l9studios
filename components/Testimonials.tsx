'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function Testimonials() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-10">REVIEWS</h2>
      <div className="flex flex-col lg:grid grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardHeader>
              <CardTitle>{testimonial.title}</CardTitle>
              <CardDescription>{testimonial.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{testimonial.quote}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote: `This asset pack is extremely versatile and can be used to accomplish a lot of things for making moving platforms. The creators even added functionality when I reached out to them about accomplishing something the original asset pack wasn't equipped to do. A+ experience, across the board. Both the individual asset pack and the creators are highly recommended.`,
    name: 'redmeansgo82 ⭐⭐⭐⭐⭐',
    title: 'Wonderful Unity contributors',
  },
  {
    quote: `When creating a 2d game most people at some point decide to add
              moving platforms. The initial implementation is easy and then over
              the course of development you find small feature such as path
              drawing, path changes and trigger events need to be written and
              suddenly moving platforms in your game is a huge timesink.
              
              This asset solves all of your problems, right away. You've got
              easing curves, dynamic speed, multiple paths, open ends, loops -
              the lot!
              
              Oh, and the path drawing tool is the easiest third party editor
              system I've ever seen and used. The quality of this asset far
              exceed it's price tag.
         
              The developer has been very helpful with updating the asset for
              new Unity versions and his support offerings have already been
              amazing. Great dev!
            
              If you're looking around the asset store for a moving platforms
              solution, THIS IS THE SOLUTION.
      `,
    name: 'pudd1nG ⭐⭐⭐⭐⭐',
    title: 'Extremely simple to implement, with all you could think you need.',
  },
  {
    quote: '很棒的插件，为我节省了不少的时间。非常感谢作者，我的游戏上架了！',
    name: 'hippobob ⭐⭐⭐⭐⭐',
    title: '完美的资源！',
  },
]
