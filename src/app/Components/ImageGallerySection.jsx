const galleryImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=600&q=80",
];

export function ImageGallerySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 my-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">College Graduates Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {galleryImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Graduate group ${idx + 1}`}
            className="w-full h-32 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
