export default function BlurTextPage() {
  return (
    <div className="px-8 py-32">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Blur Text</h1>
          <p className="text-lg text-muted-foreground">
            A text effect that applies a blur animation to reveal text gradually.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Preview Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Preview</h2>
            <div className="bg-card/80 border border-border rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary animate-pulse">
                Isn't this so cool?!
              </div>
            </div>
          </section>

          {/* Customize Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Customize</h2>
            <div className="bg-card/80 border border-border rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Animate By:</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-background">
                    <option>words</option>
                    <option>characters</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Direction:</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-background">
                    <option>top</option>
                    <option>bottom</option>
                    <option>left</option>
                    <option>right</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-2">Delay:</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    defaultValue="200"
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">200ms</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
