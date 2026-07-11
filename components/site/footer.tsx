export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <div className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold tracking-tight">
            Content That Sells
            <span className="align-super text-[0.5em] text-gold">™</span>
          </span>
        </div>
        <p className="max-w-md text-sm text-muted-foreground text-pretty">
          Everything your business already does is content. You simply need the CAPTURE
          Framework™ to recognize it, organize it, and turn it into content that sells.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Content That Sells™ · Created by Trae Firstclass. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}
