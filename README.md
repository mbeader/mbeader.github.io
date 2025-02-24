### Thumbnail generation
```
magick mogrify -set page %[fx:w*0.7]x%[fx:h*0.7]-%[fx:w*0.15]-%[fx:h*0.15] -crop +0+0 -path thumb -thumbnail 400x400 *.jpg
```
