#!/bin/bash

# Image Optimization Script for NextLead Project
# This script optimizes all images in the public directory
# Converts PNG/JPG to WebP and compresses GIFs

set -e

PUBLIC_DIR="/Users/siaralizadah/haconcepts/public"
BACKUP_DIR="/Users/siaralizadah/haconcepts/public-backup-$(date +%Y%m%d-%H%M%S)"
QUALITY=85
GIF_COLORS=128

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔧 Starting Image Optimization...${NC}"

# Create backup
echo -e "${YELLOW}📦 Creating backup...${NC}"
cp -r "$PUBLIC_DIR" "$BACKUP_DIR"
echo -e "${GREEN}✅ Backup created at: $BACKUP_DIR${NC}"

# Function to convert images to WebP
convert_to_webp() {
    local input_dir="$1"
    local quality="$2"
    
    echo -e "${YELLOW}🔄 Converting PNG to WebP...${NC}"
    find "$input_dir" -type f -iname "*.png" ! -name "*.webp" | while read -r img; do
        if [[ -f "$img" ]]; then
            echo "Converting: $(basename "$img")"
            cwebp -q "$quality" "$img" -o "${img%.*}.webp"
        fi
    done
    
    echo -e "${YELLOW}🔄 Converting JPG to WebP...${NC}"
    find "$input_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | while read -r img; do
        if [[ -f "$img" ]]; then
            echo "Converting: $(basename "$img")"
            cwebp -q "$quality" "$img" -o "${img%.*}.webp"
        fi
    done
}

# Function to optimize GIFs
optimize_gifs() {
    local input_dir="$1"
    local colors="$2"
    
    echo -e "${YELLOW}🔄 Optimizing GIFs...${NC}"
    find "$input_dir" -type f -iname "*.gif" | while read -r gif; do
        if [[ -f "$gif" ]]; then
            echo "Optimizing: $(basename "$gif")"
            # Create optimized version
            gifsicle -O3 --colors "$colors" --lossy=80 "$gif" -o "${gif%.*}-optimized.gif"
            
            # Show size reduction
            original_size=$(stat -f%z "$gif" 2>/dev/null || stat -c%s "$gif" 2>/dev/null || echo 0)
            optimized_size=$(stat -f%z "${gif%.*}-optimized.gif" 2>/dev/null || stat -c%s "${gif%.*}-optimized.gif" 2>/dev/null || echo 0)
            
            if [[ $original_size -gt 0 && $optimized_size -gt 0 ]]; then
                reduction=$(( (original_size - optimized_size) * 100 / original_size ))
                echo "  Size reduction: ${reduction}%"
            fi
        fi
    done
}

# Function to show file sizes
show_sizes() {
    local dir="$1"
    echo -e "${YELLOW}📊 File sizes in $dir:${NC}"
    find "$dir" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.webp" \) -exec ls -lh {} \; | awk '{print $5 " " $9}' | sort -hr
}

# Main execution
show_sizes "$PUBLIC_DIR"
convert_to_webp "$PUBLIC_DIR" "$QUALITY"
optimize_gifs "$PUBLIC_DIR" "$GIF_COLORS"
show_sizes "$PUBLIC_DIR"

echo -e "${GREEN}✅ Image optimization complete!${NC}"
echo -e "${GREEN}📁 Original files preserved alongside optimized versions${NC}"
echo -e "${GREEN}🗑️  Run cleanup script to remove originals if satisfied${NC}"
