type TypographyProps={
    txt:string
}
export function TypographyH1({txt}:TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance ">
      {txt}
    </h1>
  )
}

export function TypographyLarge({txt}:TypographyProps) {
  return <div className="text-md font-semibold">{txt}</div>
}
export function TypographyLargeB(txt:string) {
  return <div className="text-md font-bold">{txt}</div>
}

export function TypographyH2(txt:string) {
  return (
    <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 truncate">
      {txt}
    </h2>
  )
}

export function TypographyMuted(txt:string) {
  return (
    <p className="text-muted-foreground text-sm">{txt}</p>
  )
}

export function TypographyLargeS(txt:string) {
  return <div className="text-sm font-semibold text-[#d4d2d2] mb-2">{txt}</div>
}
export function TypographyLargeSm(txt:string) {
  return <div className="text-[8px] sm:text-sm font-semibold text-[#d4d2d2]">{txt}</div>
}
