export default function ButtonPage() {
  return (
    <div className="px-8 py-32">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Button</h1>
          <p className="text-lg text-muted-foreground">
            A collection of button components with different variants and states.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Preview Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Preview</h2>
            <div className="bg-card/80 border border-border rounded-xl p-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow hover:bg-secondary transition">
                  Primary Button
                </button>
                <button className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition">
                  Secondary Button
                </button>
                <button className="text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition">
                  Ghost Button
                </button>
              </div>
            </div>
          </section>

          {/* Documentation Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Usage</h2>
            <div className="bg-card/80 border border-border rounded-xl p-6">
              <pre className="text-sm text-muted-foreground overflow-x-auto">
{`<Button variant="primary">
  Primary Button
</Button>

<Button variant="secondary">
  Secondary Button
</Button>

<Button variant="ghost">
  Ghost Button
</Button>`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
