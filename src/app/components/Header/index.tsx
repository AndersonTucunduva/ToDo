import Image from 'next/image'

export function Header() {
  return (
    <div className="h-52 bg-preto700 flex items-center justify-center ">
      <Image src="/Logo.png" alt="Logo Todo" width={148} height={48} />
    </div>
  )
}
