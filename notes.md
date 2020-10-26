# Notes

## Export other ebook versions

### Install calibre

```
brew cask calibre
```

### Remove unexportable elements

- comment out iframes for Google map plugins
- add horizontal lines between chapters to enhance table of contents


### Build ebooks

```
gitbook pdf ./ ./_export/ucsd-tgsa-handbook.pdf
gitbook epub ./ ./_export/ucsd-tgsa-handbook.epub
gitbook mobi ./ ./_export/ucsd-tgsa-handbook.mobi
```