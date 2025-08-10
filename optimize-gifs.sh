#!/bin/bash

# GIF Optimization Script
# Konvertiert große GIF-Dateien zu WebP und MP4 für bessere Performance

echo "🎬 Starting GIF optimization..."

# Überprüfe ob ffmpeg installiert ist
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg ist nicht installiert. Installiere es mit: brew install ffmpeg (macOS) oder apt install ffmpeg (Ubuntu)"
    exit 1
fi

# Input und Output Ordner
INPUT_DIR="./public"
OUTPUT_DIR="./public/optimized"

# Erstelle Output-Ordner falls nicht vorhanden
mkdir -p "$OUTPUT_DIR"

# Zu optimierende GIF-Dateien
GIFS=(
    "Purple Daily Horoscope Phone Video Instagram Story.gif"
    "michael-ad.gif"
)

for gif in "${GIFS[@]}"; do
    if [ -f "$INPUT_DIR/$gif" ]; then
        echo "🔄 Processing: $gif"
        
        # Dateiname ohne Extension für Output
        basename=$(basename "$gif" .gif)
        
        # Originalgröße anzeigen
        original_size=$(du -h "$INPUT_DIR/$gif" | cut -f1)
        echo "   📊 Original size: $original_size"
        
        # 1. WebP Konvertierung (beste Balance zwischen Qualität und Größe)
        echo "   🎨 Creating WebP..."
        ffmpeg -i "$INPUT_DIR/$gif" \
               -vf "scale=640:1136:force_original_aspect_ratio=decrease,pad=640:1136:(ow-iw)/2:(oh-ih)/2" \
               -c:v libwebp \
               -quality 75 \
               -preset photo \
               -loop 0 \
               -y \
               "$OUTPUT_DIR/${basename}.webp" 2>/dev/null
        
        if [ -f "$OUTPUT_DIR/${basename}.webp" ]; then
            webp_size=$(du -h "$OUTPUT_DIR/${basename}.webp" | cut -f1)
            echo "   ✅ WebP created: $webp_size"
        fi
        
        # 2. MP4 Konvertierung (kleinste Dateigröße)
        echo "   🎥 Creating MP4..."
        ffmpeg -i "$INPUT_DIR/$gif" \
               -vf "scale=640:1136:force_original_aspect_ratio=decrease,pad=640:1136:(ow-iw)/2:(oh-ih)/2,fps=15" \
               -c:v libx264 \
               -crf 28 \
               -preset slow \
               -pix_fmt yuv420p \
               -movflags +faststart \
               -y \
               "$OUTPUT_DIR/${basename}.mp4" 2>/dev/null
        
        if [ -f "$OUTPUT_DIR/${basename}.mp4" ]; then
            mp4_size=$(du -h "$OUTPUT_DIR/${basename}.mp4" | cut -f1)
            echo "   ✅ MP4 created: $mp4_size"
        fi
        
        # 3. Optimierte GIF Version (als Fallback)
        echo "   🎭 Creating optimized GIF..."
        ffmpeg -i "$INPUT_DIR/$gif" \
               -vf "scale=640:1136:force_original_aspect_ratio=decrease,pad=640:1136:(ow-iw)/2:(oh-ih)/2,fps=10" \
               -c:v gif \
               -f gif \
               -y \
               "$OUTPUT_DIR/${basename}-optimized.gif" 2>/dev/null
        
        if [ -f "$OUTPUT_DIR/${basename}-optimized.gif" ]; then
            opt_gif_size=$(du -h "$OUTPUT_DIR/${basename}-optimized.gif" | cut -f1)
            echo "   ✅ Optimized GIF created: $opt_gif_size"
        fi
        
        echo "   📈 Conversion complete for $gif"
        echo ""
    else
        echo "❌ File not found: $INPUT_DIR/$gif"
    fi
done

echo "🎉 Optimization complete!"
echo "📂 Optimized files are in: $OUTPUT_DIR"
echo ""
echo "📋 Next steps:"
echo "1. Copy optimized files to your public folder"
echo "2. Update your OptimizedVideo components with new file paths"
echo "3. Test the loading performance"
echo ""
echo "💡 File size comparison:"
ls -lh "$OUTPUT_DIR"