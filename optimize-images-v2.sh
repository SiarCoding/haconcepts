#!/bin/bash

# Improved Image Optimization Script
# Handles errors gracefully and provides detailed feedback

set -e

PUBLIC_DIR="/Users/siaralizadah/haconcepts/public"
BACKUP_DIR="/Users/siaralizadah/haconcepts/public-backup-$(date +%Y%m%d-%H%M%S)"
QUALITY=85
GIF_COLORS=64

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔧 NextLead Image Optimization${NC}"
echo -e "${BLUE}Reducing image sizes for faster hosting${NC}"

# Check if tools are available
check_tools() {
    echo -e "${YELLOW}🔍 Checking tools...${NC}"
    
    if ! command -v cwebp &> /dev/null; then
        echo -e "${RED}❌ cwebp not found. Install with: brew install webp${NC}"
        exit 1
    fi
    
    if ! command -v gifsicle &> /dev/null; then
        echo -e "${RED}❌ gifsicle not found. Install with: brew install gifsicle${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ All tools available${NC}"
}

# Create backup
create_backup() {
    echo -e "${YELLOW}📦 Creating backup...${NC}"
    if [[ ! -d "$BACKUP_DIR" ]]; then
        cp -r "$PUBLIC_DIR" "$BACKUP_DIR"
        echo -e "${GREEN}✅ Backup created: $BACKUP_DIR${NC}"
    fi
}

# Calculate directory size
dir_size() {
    du -sh "$1" 2>/dev/null | cut -f1 || echo "0"
}

# Convert single image to WebP
convert_image() {
    local img="$1"
    local quality="$2"
    local ext="${img##*.}"
    local basename="$(basename "$img")"
    
    echo "Processing: $basename"
    
    # Skip if already processed or corrupted
    if [[ ! -f "$img" ]]; then
        echo -e "  ${RED}❌ File not found${NC}"
        return 1
    fi
    
    # Get original size
    original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null || echo 0)
    
    # Convert based on extension
    case "$ext" in
        png|PNG)
            if cwebp -q "$quality" "$img" -o "${img%.*}.webp" 2>/dev/null; then
                new_size=$(stat -f%z "${img%.*}.webp" 2>/dev/null || stat -c%s "${img%.*}.webp" 2>/dev/null || echo 0)
                if [[ $original_size -gt 0 && $new_size -gt 0 ]]; then
                    reduction=$(( (original_size - new_size) * 100 / original_size ))
                    echo -e "  ${GREEN}✅ PNG → WebP: ${reduction}% smaller${NC}"
                fi
            else
                echo -e "  ${RED}❌ Failed to convert PNG${NC}"
            fi
            ;;
        jpg|JPG|jpeg|JPEG)
            if cwebp -q "$quality" "$img" -o "${img%.*}.webp" 2>/dev/null; then
                new_size=$(stat -f%z "${img%.*}.webp" 2>/dev/null || stat -c%s "${img%.*}.webp" 2>/dev/null || echo 0)
                if [[ $original_size -gt 0 && $new_size -gt 0 ]]; then
                    reduction=$(( (original_size - new_size) * 100 / original_size ))
                    echo -e "  ${GREEN}✅ JPG → WebP: ${reduction}% smaller${NC}"
                fi
            else
                echo -e "  ${RED}❌ Failed to convert JPG${NC}"
            fi
            ;;
    esac
}

# Optimize single GIF
optimize_gif() {
    local gif="$1"
    local colors="$2"
    local basename="$(basename "$gif")"
    
    echo "Optimizing GIF: $basename"
    
    original_size=$(stat -f%z "$gif" 2>/dev/null || stat -c%s "$gif" 2>/dev/null || echo 0)
    
    if gifsicle -O3 --colors "$colors" --lossy=80 "$gif" -o "${gif%.*}-optimized.gif" 2>/dev/null; then
        new_size=$(stat -f%z "${gif%.*}-optimized.gif" 2>/dev/null || stat -c%s "${gif%.*}-optimized.gif" 2>/dev/null || echo 0)
        if [[ $original_size -gt 0 && $new_size -gt 0 ]]; then
            reduction=$(( (original_size - new_size) * 100 / original_size ))
            echo -e "  ${GREEN}✅ GIF optimized: ${reduction}% smaller${NC}"
        fi
    else
        echo -e "  ${RED}❌ Failed to optimize GIF${NC}"
    fi
}

# Main processing
main() {
    check_tools
    create_backup
    
    echo -e "${BLUE}📊 Original directory size: $(dir_size "$PUBLIC_DIR")${NC}"
    
    # Process PNG files
    echo -e "${YELLOW}🔄 Converting PNG to WebP...${NC}"
    find "$PUBLIC_DIR" -type f -iname "*.png" ! -name "*.webp" | while read -r img; do
        convert_image "$img" "$QUALITY"
    done
    
    # Process JPG files
    echo -e "${YELLOW}🔄 Converting JPG to WebP...${NC}"
    find "$PUBLIC_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | while read -r img; do
        convert_image "$img" "$QUALITY"
    done
    
    # Process GIF files
    echo -e "${YELLOW}🔄 Optimizing GIFs...${NC}"
    find "$PUBLIC_DIR" -type f -iname "*.gif" ! -name "*-optimized.gif" | while read -r gif; do
        optimize_gif "$gif" "$GIF_COLORS"
    done
    
    echo -e "${BLUE}📊 New directory size: $(dir_size "$PUBLIC_DIR")${NC}"
    echo -e "${GREEN}✅ Optimization complete!${NC}"
    echo -e "${YELLOW}💡 Check the optimized files and run cleanup when ready${NC}"
}

# Run main function
main "$@"
