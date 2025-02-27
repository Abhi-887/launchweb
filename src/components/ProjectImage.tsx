export default function ProjectImage({ title }: { title: string }) {
  return (
    <div className="aspect-video relative bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" />
      <h3 className="relative text-xl font-bold text-white">{title}</h3>
    </div>
  )
}
