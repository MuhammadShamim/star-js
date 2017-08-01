:star:
# star-js
## Just another application

# Setup
```shell
git clone https://github.com/MuhammadShamim/star-js.git star-js
cd star-js
npm install
npm run dev
```

# Build
```shell
npm run build
npm run build-min
```

# Test
add below line in index.html and check browser console as it is available outside webpack :thumbsup:
```javascript
log('Hello Star by webpack print_to_console from index.html');
```


uncomment below line in index.html and check browser console as it is not abailable outside webpack :ok_hand:
```javascript
print_to_console('Hello Star by webpack print_to_console from index.html');
```