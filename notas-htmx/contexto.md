# .

## Árvore de arquivos (visão geral)

```
📁 .
  📁 android
    📁 .gradle
      📁 8.11.1
        📁 checksums
          📄 checksums.lock
        📁 executionHistory
          📄 executionHistory.bin
          📄 executionHistory.lock
        📁 expanded
        📁 fileChanges
          📄 last-build.bin
        📁 fileHashes
          📄 fileHashes.bin
          📄 fileHashes.lock
          📄 resourceHashesCache.bin
        📁 vcsMetadata
        📄 gc.properties
      📁 buildOutputCleanup
        📄 buildOutputCleanup.lock
        📄 cache.properties
        📄 outputFiles.bin
      📁 vcs-1
        📄 gc.properties
      📄 config.properties
      📄 file-system.probe
    📁 app
      📁 src
        📁 androidTest
          📁 java
            📁 com
              📁 getcapacitor
                📁 myapp
                  📄 ExampleInstrumentedTest.java
        📁 main
          📁 assets
            📁 public
              📁 js
                📄 app.js
                📄 db.js
              📁 partials
                📄 note_form.html
                📄 notes_list.html
                📄 settings.html
              📄 cordova.js
              📄 cordova_plugins.js
              📄 index.html
            📄 capacitor.config.json
            📄 capacitor.plugins.json
          📁 java
            📁 com
              📁 seuapp
                📁 notas
                  📄 MainActivity.java
          📁 res
            📁 drawable
              📄 ic_launcher_background.xml
              📄 splash.png
            📁 drawable-land-hdpi
              📄 splash.png
            📁 drawable-land-mdpi
              📄 splash.png
            📁 drawable-land-xhdpi
              📄 splash.png
            📁 drawable-land-xxhdpi
              📄 splash.png
            📁 drawable-land-xxxhdpi
              📄 splash.png
            📁 drawable-port-hdpi
              📄 splash.png
            📁 drawable-port-mdpi
              📄 splash.png
            📁 drawable-port-xhdpi
              📄 splash.png
            📁 drawable-port-xxhdpi
              📄 splash.png
            📁 drawable-port-xxxhdpi
              📄 splash.png
            📁 drawable-v24
              📄 ic_launcher_foreground.xml
            📁 layout
              📄 activity_main.xml
            📁 mipmap-anydpi-v26
              📄 ic_launcher.xml
              📄 ic_launcher_round.xml
            📁 mipmap-hdpi
              📄 ic_launcher.png
              📄 ic_launcher_foreground.png
              📄 ic_launcher_round.png
            📁 mipmap-mdpi
              📄 ic_launcher.png
              📄 ic_launcher_foreground.png
              📄 ic_launcher_round.png
            📁 mipmap-xhdpi
              📄 ic_launcher.png
              📄 ic_launcher_foreground.png
              📄 ic_launcher_round.png
            📁 mipmap-xxhdpi
              📄 ic_launcher.png
              📄 ic_launcher_foreground.png
              📄 ic_launcher_round.png
            📁 mipmap-xxxhdpi
              📄 ic_launcher.png
              📄 ic_launcher_foreground.png
              📄 ic_launcher_round.png
            📁 values
              📄 ic_launcher_background.xml
              📄 strings.xml
              📄 styles.xml
            📁 xml
              📄 config.xml
              📄 file_paths.xml
          📄 AndroidManifest.xml
        📁 test
          📁 java
            📁 com
              📁 getcapacitor
                📁 myapp
                  📄 ExampleUnitTest.java
      📄 .gitignore
      📄 build.gradle
      📄 capacitor.build.gradle
      📄 proguard-rules.pro
    📁 capacitor-cordova-android-plugins
      📁 src
        📁 main
          📁 java
            📄 .gitkeep
          📁 res
            📄 .gitkeep
          📄 AndroidManifest.xml
      📄 build.gradle
      📄 cordova.variables.gradle
    📁 gradle
      📁 wrapper
        📄 gradle-wrapper.jar
        📄 gradle-wrapper.properties
    📄 .gitignore
    📄 build.gradle
    📄 capacitor.settings.gradle
    📄 gradle.properties
    📄 gradlew
    📄 gradlew.bat
    📄 local.properties
    📄 settings.gradle
    📄 variables.gradle
  📁 www
    📁 icons
      📄 horse-emoji.svg
    📁 js
      📄 app.js
      📄 db.js
    📁 partials
      📄 note_form.html
      📄 notes_list.html
      📄 settings.html
    📄 index.html
  📄 capacitor.config.json
  📄 contexto.md
  📄 manifest.json
  📄 package-lock.json
  📄 package.json
```

## Conteúdo dos arquivos de código

> Apenas extensões reconhecidas têm conteúdo exibido; demais aparecem apenas na árvore acima.

### `capacitor.config.json`

```json
{
  "appId": "com.seuapp.notas",
  "appName": "NotasHTMX",
  "webDir": "www"
}

```

### `manifest.json`

```json
{
    "name": "NotasHTMX",
    "short_name": "NotasHTMX",
    "start_url": ".",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#ffffff",
    "icons": [
      {
        "src": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🐴</text></svg>",
        "sizes": "512x512",
        "type": "image/svg+xml"
      }
    ]
  }
  
```

### `package-lock.json`

```json
{
  "name": "notas-htmx",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "notas-htmx",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "@capacitor-community/speech-recognition": "^7.0.1",
        "@capacitor/android": "^7.4.2",
        "@capacitor/cli": "^7.4.2",
        "@capacitor/core": "^7.4.2"
      },
      "devDependencies": {
        "cordova-res": "^0.15.4"
      }
    },
    "node_modules/@capacitor-community/speech-recognition": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/@capacitor-community/speech-recognition/-/speech-recognition-7.0.1.tgz",
      "integrity": "sha512-ykpBZziR575X0eURO5vXaD9gVrXXC/7Ra2qql/2KP6/jxWOqAFuw4eKjSPjwdAgGE6a/Z+v8FJm4SVh57MVwDA==",
      "license": "MIT",
      "peerDependencies": {
        "@capacitor/core": ">=7.0.0"
      }
    },
    "node_modules/@capacitor/android": {
      "version": "7.4.2",
      "resolved": "https://registry.npmjs.org/@capacitor/android/-/android-7.4.2.tgz",
      "integrity": "sha512-FZ7M9NwFkljR7EP5eXiE32mAIfZNcYw2CzRMCG3rQu0u0ZaIoeOeq5/oK4YcDnGpNmu8jpngKJqZ+9OiSQSwDg==",
      "license": "MIT",
      "peerDependencies": {
        "@capacitor/core": "^7.4.0"
      }
    },
    "node_modules/@capacitor/cli": {
      "version": "7.4.2",
      "resolved": "https://registry.npmjs.org/@capacitor/cli/-/cli-7.4.2.tgz",
      "integrity": "sha512-ckcRbg/kBSnJsuCTCLzowBxvgDTI+dcIN7LK+Nt71fbaUG3judpF279ymJRrgRDJshFR5D5dfcvTFh5N1z8liA==",
      "license": "MIT",
      "dependencies": {
        "@ionic/cli-framework-output": "^2.2.8",
        "@ionic/utils-subprocess": "^3.0.1",
        "@ionic/utils-terminal": "^2.3.5",
        "commander": "^12.1.0",
        "debug": "^4.4.0",
        "env-paths": "^2.2.0",
        "fs-extra": "^11.2.0",
        "kleur": "^4.1.5",
        "native-run": "^2.0.1",
        "open": "^8.4.0",
        "plist": "^3.1.0",
        "prompts": "^2.4.2",
        "rimraf": "^6.0.1",
        "semver": "^7.6.3",
        "tar": "^6.1.11",
        "tslib": "^2.8.1",
        "xml2js": "^0.6.2"
      },
      "bin": {
        "cap": "bin/capacitor",
        "capacitor": "bin/capacitor"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@capacitor/core": {
      "version": "7.4.2",
      "resolved": "https://registry.npmjs.org/@capacitor/core/-/core-7.4.2.tgz",
      "integrity": "sha512-akCf9A1FUR8AWTtmgGjHEq6LmGsjA2U7igaJ9PxiCBfyxKqlDbuGHrlNdpvHEjV5tUPH3KYtkze6gtFcNKPU9A==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/@ionic/cli-framework-output": {
      "version": "2.2.8",
      "resolved": "https://registry.npmjs.org/@ionic/cli-framework-output/-/cli-framework-output-2.2.8.tgz",
      "integrity": "sha512-TshtaFQsovB4NWRBydbNFawql6yul7d5bMiW1WYYf17hd99V6xdDdk3vtF51bw6sLkxON3bDQpWsnUc9/hVo3g==",
      "license": "MIT",
      "dependencies": {
        "@ionic/utils-terminal": "2.3.5",
        "debug": "^4.0.0",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@ionic/utils-array": {
      "version": "2.1.6",
      "resolved": "https://registry.npmjs.org/@ionic/utils-array/-/utils-array-2.1.6.tgz",
      "integrity": "sha512-0JZ1Zkp3wURnv8oq6Qt7fMPo5MpjbLoUoa9Bu2Q4PJuSDWM8H8gwF3dQO7VTeUj3/0o1IB1wGkFWZZYgUXZMUg==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.0.0",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@ionic/utils-fs": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/@ionic/utils-fs/-/utils-fs-3.1.7.tgz",
      "integrity": "sha512-2EknRvMVfhnyhL1VhFkSLa5gOcycK91VnjfrTB0kbqkTFCOXyXgVLI5whzq7SLrgD9t1aqos3lMMQyVzaQ5gVA==",
      "license": "MIT",
      "dependencies": {
        "@types/fs-extra": "^8.0.0",
        "debug": "^4.0.0",
        "fs-extra": "^9.0.0",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@ionic/utils-fs/node_modules/fs-extra": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
      "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
      "license": "MIT",
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@ionic/utils-object": {
      "version": "2.1.6",
      "resolved": "https://registry.npmjs.org/@ionic/utils-object/-/utils-object-2.1.6.tgz",
      "integrity": "sha512-vCl7sl6JjBHFw99CuAqHljYJpcE88YaH2ZW4ELiC/Zwxl5tiwn4kbdP/gxi2OT3MQb1vOtgAmSNRtusvgxI8ww==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.0.0",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@ionic/utils-process": {
      "version": "2.1.12",
      "resolved": "https://registry.npmjs.org/@ionic/utils-process/-/utils-process-2.1.12.tgz",
      "integrity": "sha512-Jqkgyq7zBs/v/J3YvKtQQiIcxfJyplPgECMWgdO0E1fKrrH8EF0QGHNJ9mJCn6PYe2UtHNS8JJf5G21e09DfYg==",
      "license": "MIT",
      "dependencies": {
        "@ionic/utils-object": "2.1.6",
        "@ionic/utils-terminal": "2.3.5",
        "debug": "^4.0.0",
        "signal-exit": "^3.0.3",
        "tree-kill": "^1.2.2",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@ionic/utils-stream": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/@ionic/utils-stream/-/utils-stream-3.1.7.tgz",
      "integrity": "sha512-eSELBE7NWNFIHTbTC2jiMvh1ABKGIpGdUIvARsNPMNQhxJB3wpwdiVnoBoTYp+5a6UUIww4Kpg7v6S7iTctH1w==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.0.0",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@ionic/utils-subprocess": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@ionic/utils-subprocess/-/utils-subprocess-3.0.1.tgz",
      "integrity": "sha512-cT4te3AQQPeIM9WCwIg8ohroJ8TjsYaMb2G4ZEgv9YzeDqHZ4JpeIKqG2SoaA3GmVQ3sOfhPM6Ox9sxphV/d1A==",
      "license": "MIT",
      "dependencies": {
        "@ionic/utils-array": "2.1.6",
        "@ionic/utils-fs": "3.1.7",
        "@ionic/utils-process": "2.1.12",
        "@ionic/utils-stream": "3.1.7",
        "@ionic/utils-terminal": "2.3.5",
        "cross-spawn": "^7.0.3",
        "debug": "^4.0.0",
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@ionic/utils-terminal": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@ionic/utils-terminal/-/utils-terminal-2.3.5.tgz",
      "integrity": "sha512-3cKScz9Jx2/Pr9ijj1OzGlBDfcmx7OMVBt4+P1uRR0SSW4cm1/y3Mo4OY3lfkuaYifMNBW8Wz6lQHbs1bihr7A==",
      "license": "MIT",
      "dependencies": {
        "@types/slice-ansi": "^4.0.0",
        "debug": "^4.0.0",
        "signal-exit": "^3.0.3",
        "slice-ansi": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0",
        "tslib": "^2.0.1",
        "untildify": "^4.0.0",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@isaacs/balanced-match": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/balanced-match/-/balanced-match-4.0.1.tgz",
      "integrity": "sha512-yzMTt9lEb8Gv7zRioUilSglI0c0smZ9k5D65677DLWLtWJaXIS3CqcGyUFByYKlnUj6TkjLVs54fBl6+TiGQDQ==",
      "license": "MIT",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@isaacs/brace-expansion": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/@isaacs/brace-expansion/-/brace-expansion-5.0.0.tgz",
      "integrity": "sha512-ZT55BDLV0yv0RBm2czMiZ+SqCGO7AvmOM3G/w2xhVPH+te0aKgFjmBvGlL1dH+ql2tgGO3MVrbb3jCKyvpgnxA==",
      "license": "MIT",
      "dependencies": {
        "@isaacs/balanced-match": "^4.0.1"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.0.tgz",
      "integrity": "sha512-TKY5pyBkHyADOPYlRT9Lx6F544mPl0vS5Ew7BJ45hA08Q+t3GjbueLliBWN3sMICk6+y7HdyxSzC4bWS8baBdg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-styles": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "license": "MIT"
    },
    "node_modules/@isaacs/cliui/node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/@types/fs-extra": {
      "version": "8.1.5",
      "resolved": "https://registry.npmjs.org/@types/fs-extra/-/fs-extra-8.1.5.tgz",
      "integrity": "sha512-0dzKcwO+S8s2kuF5Z9oUWatQJj5Uq/iqphEtE3GQJVRRYm/tD1LglU2UnXi2A8jLq5umkGouOXOR9y0n613ZwQ==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "24.3.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.3.0.tgz",
      "integrity": "sha512-aPTXCrfwnDLj4VvXrm+UUCQjNEvJgNA8s5F1cvwQU+3KNltTOkBm1j30uNLyqqPNe7gE3KFzImYoZEfLhp4Yow==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.10.0"
      }
    },
    "node_modules/@types/slice-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@types/slice-ansi/-/slice-ansi-4.0.0.tgz",
      "integrity": "sha512-+OpjSaq85gvlZAYINyzKpLeiFkSC4EsC6IIiT6v6TLSU5k5U83fHGj9Lel8oKEXM0HqgrMVCjXPDPVICtxF7EQ==",
      "license": "MIT"
    },
    "node_modules/@xmldom/xmldom": {
      "version": "0.8.11",
      "resolved": "https://registry.npmjs.org/@xmldom/xmldom/-/xmldom-0.8.11.tgz",
      "integrity": "sha512-cQzWCtO6C8TQiYl1ruKNn2U6Ao4o4WBBcbL61yJl84x+j5sOWWFU9X7DpND8XZG3daDppSsigMdfAIl2upQBRw==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/astral-regex": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
      "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/at-least-node": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
      "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
      "license": "ISC",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/big-integer": {
      "version": "1.6.52",
      "resolved": "https://registry.npmjs.org/big-integer/-/big-integer-1.6.52.tgz",
      "integrity": "sha512-QxD8cf2eVqJOOz63z6JIN9BzvVs/dlySa5HGSBH5xtR8dPteIRQnBxxKqkNTiT6jbDTF6jAfrd4oMcND9RGbQg==",
      "license": "Unlicense",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/bl": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer": "^5.5.0",
        "inherits": "^2.0.4",
        "readable-stream": "^3.4.0"
      }
    },
    "node_modules/bplist-parser": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/bplist-parser/-/bplist-parser-0.3.2.tgz",
      "integrity": "sha512-apC2+fspHGI3mMKj+dGevkGo/tCqVB8jMb6i+OX+E29p0Iposz07fABkRIfVUPNd5A5VbuOz1bZbnmkKLYF+wQ==",
      "license": "MIT",
      "dependencies": {
        "big-integer": "1.6.x"
      },
      "engines": {
        "node": ">= 5.10.0"
      }
    },
    "node_modules/buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "node_modules/buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==",
      "license": "MIT",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/chownr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/commander": {
      "version": "12.1.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-12.1.0.tgz",
      "integrity": "sha512-Vw8qHK3bZM9y/P10u3Vib8o/DdkvA2OtPtZvD871QKjy74Wj1WSKFILMPRPSdUSx5RFK1arlJzEtA4PkFgnbuA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/cordova-res": {
      "version": "0.15.4",
      "resolved": "https://registry.npmjs.org/cordova-res/-/cordova-res-0.15.4.tgz",
      "integrity": "sha512-TjFZhjUtK8qq4DVrgR+KI7tKcUL704cnkTPRhHbKlCPzefHoz1tBOX93wc76dOMmOWKTsbJz83DIm6mqdp5Pmg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ionic/utils-array": "^2.1.5",
        "@ionic/utils-fs": "^3.1.5",
        "debug": "^4.2.0",
        "elementtree": "^0.1.7",
        "sharp": "^0.29.2",
        "tslib": "^2.0.3"
      },
      "bin": {
        "cordova-res": "bin/cordova-res"
      },
      "engines": {
        "node": ">=10.3.0"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/debug": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.1.tgz",
      "integrity": "sha512-KcKCqiftBJcZr++7ykoDIEwSa3XWowTfNPo92BYxjXiyYEVrUQh2aLyhxBCwww+heortUFxEJYcRzosstTEBYQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decompress-response": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz",
      "integrity": "sha512-aW35yZM6Bb/4oJlZncMH2LCoZtJXTRxES17vE3hoRiowU2kWHaJKFkSBDnDR+cm9J+9QhXmREyIfv0pji9ejCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-response": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/define-lazy-prop": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz",
      "integrity": "sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/detect-libc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
      "integrity": "sha512-pGjwhsmsp4kL2RTz08wcOlGN83otlqHeD/Z5T8GXZB+/YcpQ/dgo+lbU8ZsGxV0HIvqqxo9l7mqYwyYMD9bKDg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "detect-libc": "bin/detect-libc.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "license": "MIT"
    },
    "node_modules/elementtree": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/elementtree/-/elementtree-0.1.7.tgz",
      "integrity": "sha512-wkgGT6kugeQk/P6VZ/f4T+4HB41BVgNBq5CDIZVbQ02nvTVqAiVTbskxxu3eA/X96lMlfYOwnLQpN2v5E1zDEg==",
      "license": "Apache-2.0",
      "dependencies": {
        "sax": "1.1.4"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/end-of-stream": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/env-paths": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
      "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/expand-template": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz",
      "integrity": "sha512-XYfuKMvj4O35f/pOXLObndIRvyQ+/+6AhODh+OKWj9S9498pHHn/IMszH+gt0fBCRWMNfk1ZSp5x3AifmnI2vg==",
      "dev": true,
      "license": "(MIT OR WTFPL)",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fd-slicer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
      "integrity": "sha512-cE1qsB/VwyQozZ+q1dGxR8LBYNZeofhEdUNGSMbQD3Gw2lAzX9Zb3uIU6Ebc/Fmyjo9AWWfnn0AUCHqtevs/8g==",
      "license": "MIT",
      "dependencies": {
        "pend": "~1.2.0"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/foreground-child/node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fs-constants": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
      "integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fs-extra": {
      "version": "11.3.1",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-11.3.1.tgz",
      "integrity": "sha512-eXvGGwZ5CL17ZSwHWd3bbgk7UUpF6IFHtP57NYYakPvHOs8GDgDe5KJI36jIJzDkJ6eJjuzRA8eBQb6SkKue0g==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=14.14"
      }
    },
    "node_modules/fs-minipass": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
      "license": "ISC",
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/fs-minipass/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/github-from-package": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz",
      "integrity": "sha512-SyHy3T1v2NUXn29OsWdxmK6RwHD+vkj3v8en8AOBZ1wBQ/hCAQ5bAQTD02kW4W9tUp/3Qh6J8r9EvntiyCmOOw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/glob": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-11.0.3.tgz",
      "integrity": "sha512-2Nim7dha1KVkaiF4q6Dj+ngPPMdfvLJEOpZk/jKiUAkqKebpGAWQXAq9z1xu9HKu5lWfqw/FASuccEjyznjPaA==",
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.3.1",
        "jackspeak": "^4.1.1",
        "minimatch": "^10.0.3",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^2.0.0"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ini": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/ini/-/ini-4.1.3.tgz",
      "integrity": "sha512-X7rqawQBvfdjS10YU1y1YVreA3SsLrW9dX2CewP2EbBJM4ypVNLDkO5y04gejPwKIY9lR+7r9gn3rFPt/kmWFg==",
      "license": "ISC",
      "engines": {
        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-docker": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
      "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
      "license": "MIT",
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-wsl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
      "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
      "license": "MIT",
      "dependencies": {
        "is-docker": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "license": "ISC"
    },
    "node_modules/jackspeak": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-4.1.1.tgz",
      "integrity": "sha512-zptv57P3GpL+O0I7VdMJNBZCu+BPHVQUk55Ft8/QCJjTVxrnJHuVuX/0Bl2A6/+2oyR/ZMEuFKwmzqqZ/U5nPQ==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.2.0.tgz",
      "integrity": "sha512-FGuPw30AdOIUTRMC2OMRtQV+jkVj2cfPqSeWXv1NEAJ1qZ5zb1X6z1mFhbfOB/iy3ssJCD+3KuZ8r8C3uVFlAg==",
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/kleur": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
      "integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lru-cache": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.1.0.tgz",
      "integrity": "sha512-QIXZUBJUx+2zHUdQujWejBkcD9+cs94tLn0+YL8UrCh+D5sCXZ4c7LaEH48pNwRY3MLDgqUFyhlCyjJPf1WP0A==",
      "license": "ISC",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/mimic-response": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz",
      "integrity": "sha512-z0yWI+4FDrrweS8Zmt4Ej5HdJmky15+L2e6Wgn3+iK5fWzb6T3fhNFq2+MeTRb064c6Wr4N/wv0DzQTjNzHNGQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/minimatch": {
      "version": "10.0.3",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.0.3.tgz",
      "integrity": "sha512-IPZ167aShDZZUMdRk66cyQAW3qr0WzbHkPdMYa8bzZhlHhO3jALbKdxcaak7W9FfT2rZNpQuUu4Od7ILEpXSaw==",
      "license": "ISC",
      "dependencies": {
        "@isaacs/brace-expansion": "^5.0.0"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minizlib": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
      "license": "MIT",
      "dependencies": {
        "minipass": "^3.0.0",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/minizlib/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mkdirp-classic": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz",
      "integrity": "sha512-gKLcREMhtuZRwRAfqP3RFW+TK4JqApVBtOIftVgjuABpAtpxhPGaDcfvbhNvD0B8iD1oUr/txX35NjcaY6Ns/A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/napi-build-utils": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-2.0.0.tgz",
      "integrity": "sha512-GEbrYkbfF7MoNaoh2iGG84Mnf/WZfB0GdGEsM8wz7Expx/LlWf5U8t9nvJKXSp3qr5IsEbK04cBGhol/KwOsWA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/native-run": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/native-run/-/native-run-2.0.1.tgz",
      "integrity": "sha512-XfG1FBZLM50J10xH9361whJRC9SHZ0Bub4iNRhhI61C8Jv0e1ud19muex6sNKB51ibQNUJNuYn25MuYET/rE6w==",
      "license": "MIT",
      "dependencies": {
        "@ionic/utils-fs": "^3.1.7",
        "@ionic/utils-terminal": "^2.3.4",
        "bplist-parser": "^0.3.2",
        "debug": "^4.3.4",
        "elementtree": "^0.1.7",
        "ini": "^4.1.1",
        "plist": "^3.1.0",
        "split2": "^4.2.0",
        "through2": "^4.0.2",
        "tslib": "^2.6.2",
        "yauzl": "^2.10.0"
      },
      "bin": {
        "native-run": "bin/native-run"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/node-abi": {
      "version": "3.75.0",
      "resolved": "https://registry.npmjs.org/node-abi/-/node-abi-3.75.0.tgz",
      "integrity": "sha512-OhYaY5sDsIka7H7AtijtI9jwGYLyl29eQn/W623DiN/MIv5sUqc4g7BIDThX+gb7di9f6xK02nkp8sdfFWZLTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.3.5"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/node-addon-api": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-4.3.0.tgz",
      "integrity": "sha512-73sE9+3UaLYYFmDsFZnqCInzPyh3MqIwZO9cw58yIqAZhONrrabrYyYe3TuIqtIiOuTXVhsGau8hcrhhwSsDIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/open": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/open/-/open-8.4.2.tgz",
      "integrity": "sha512-7x81NCL719oNbsq/3mh+hVrAWmFuEYUqrq/Iw3kUzH8ReypT9QQ0BLoJS7/G9k6N81XjW4qHWtjWwe/9eLy1EQ==",
      "license": "MIT",
      "dependencies": {
        "define-lazy-prop": "^2.0.0",
        "is-docker": "^2.1.1",
        "is-wsl": "^2.2.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
      "license": "BlueOak-1.0.0"
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-scurry": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.0.tgz",
      "integrity": "sha512-ypGJsmGtdXUOeM5u93TyeIEfEhM6s+ljAhrk5vAvSx8uyY/02OvrZnA0YNGUrPXfpJMgI1ODd3nwz8Npx4O4cg==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/pend": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
      "integrity": "sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg==",
      "license": "MIT"
    },
    "node_modules/plist": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/plist/-/plist-3.1.0.tgz",
      "integrity": "sha512-uysumyrvkUX0rX/dEVqt8gC3sTBzd4zoWfLeS29nb53imdaXVvLINYXTI2GNqzaMuvacNx4uJQ8+b3zXR0pkgQ==",
      "license": "MIT",
      "dependencies": {
        "@xmldom/xmldom": "^0.8.8",
        "base64-js": "^1.5.1",
        "xmlbuilder": "^15.1.1"
      },
      "engines": {
        "node": ">=10.4.0"
      }
    },
    "node_modules/prebuild-install": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/prebuild-install/-/prebuild-install-7.1.3.tgz",
      "integrity": "sha512-8Mf2cbV7x1cXPUILADGI3wuhfqWvtiLA1iclTDbFRZkgRQS0NqsPZphna9V+HyTEadheuPmjaJMsbzKQFOzLug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "detect-libc": "^2.0.0",
        "expand-template": "^2.0.3",
        "github-from-package": "0.0.0",
        "minimist": "^1.2.3",
        "mkdirp-classic": "^0.5.3",
        "napi-build-utils": "^2.0.0",
        "node-abi": "^3.3.0",
        "pump": "^3.0.0",
        "rc": "^1.2.7",
        "simple-get": "^4.0.0",
        "tar-fs": "^2.0.0",
        "tunnel-agent": "^0.6.0"
      },
      "bin": {
        "prebuild-install": "bin.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/prebuild-install/node_modules/detect-libc": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz",
      "integrity": "sha512-3UDv+G9CsCKO1WKMGw9fwq/SWJYbI0c5Y7LU1AXYoDdbhE2AHQ6N6Nb34sG8Fj7T5APy8qXDCKuuIHd1BR0tVA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/prompts": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
      "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
      "license": "MIT",
      "dependencies": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.5"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/prompts/node_modules/kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pump": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.3.tgz",
      "integrity": "sha512-todwxLMY7/heScKmntwQG8CXVkWUOdYxIvY2s0VWAAMh/nd8SoYiRaKjlr7+iCs984f2P8zvrfWcDDYVb73NfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "dev": true,
      "license": "(BSD-2-Clause OR MIT OR Apache-2.0)",
      "dependencies": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "bin": {
        "rc": "cli.js"
      }
    },
    "node_modules/rc/node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/rimraf": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-6.0.1.tgz",
      "integrity": "sha512-9dkvaxAsk/xNXSJzMgFqqMCuFgt2+KsOFek3TMLfo8NCPfWpBmqwyNn5Y+NX56QUYfCtsyhF3ayiboEoUmJk/A==",
      "license": "ISC",
      "dependencies": {
        "glob": "^11.0.0",
        "package-json-from-dist": "^1.0.0"
      },
      "bin": {
        "rimraf": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/sax": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.1.4.tgz",
      "integrity": "sha512-5f3k2PbGGp+YtKJjOItpg3P99IMD84E4HOvcfleTb5joCHNXYLsR9yWFPOYGgaeMPDubQILTCMdsFb2OMeOjtg==",
      "license": "ISC"
    },
    "node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.29.3",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.29.3.tgz",
      "integrity": "sha512-fKWUuOw77E4nhpyzCCJR1ayrttHoFHBT2U/kR/qEMRhvPEcluG4BKj324+SCO1e84+knXHwhJ1HHJGnUt4ElGA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "color": "^4.0.1",
        "detect-libc": "^1.0.3",
        "node-addon-api": "^4.2.0",
        "prebuild-install": "^7.0.0",
        "semver": "^7.3.5",
        "simple-get": "^4.0.0",
        "tar-fs": "^2.1.1",
        "tunnel-agent": "^0.6.0"
      },
      "engines": {
        "node": ">=12.13.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "license": "ISC"
    },
    "node_modules/simple-concat": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz",
      "integrity": "sha512-cSFtAPtRhljv69IK0hTVZQ+OfE9nePi/rtJmw5UjHeVyVroEqJXP1sFztKUy1qU+xvz3u/sfYJLa947b7nAN2Q==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/simple-get": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz",
      "integrity": "sha512-brv7p5WgH0jmQJr1ZDDfKDOSeWWg+OVypG99A/5vYGPqJ6pxiaHLy8nxtFjBA7oMa01ebA9gfh1uMCFqOuXxvA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decompress-response": "^6.0.0",
        "once": "^1.3.1",
        "simple-concat": "^1.0.0"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
      "license": "MIT"
    },
    "node_modules/slice-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-4.0.0.tgz",
      "integrity": "sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "astral-regex": "^2.0.0",
        "is-fullwidth-code-point": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/slice-ansi?sponsor=1"
      }
    },
    "node_modules/split2": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",
      "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",
      "license": "ISC",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tar": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.2.1.tgz",
      "integrity": "sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==",
      "license": "ISC",
      "dependencies": {
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "minipass": "^5.0.0",
        "minizlib": "^2.1.1",
        "mkdirp": "^1.0.3",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/tar-fs": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/tar-fs/-/tar-fs-2.1.3.tgz",
      "integrity": "sha512-090nwYJDmlhwFwEW3QQl+vaNnxsO2yVsd45eTKRBzSzu+hlb1w2K9inVq5b0ngXuLVqQ4ApvsUHHnu/zQNkWAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chownr": "^1.1.1",
        "mkdirp-classic": "^0.5.2",
        "pump": "^3.0.0",
        "tar-stream": "^2.1.4"
      }
    },
    "node_modules/tar-fs/node_modules/chownr": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
      "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/tar-stream": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz",
      "integrity": "sha512-ujeqbceABgwMZxEJnk2HDY2DlnUZ+9oEcb1KzTVfYHio0UE6dG71n60d8D2I4qNvleWrrXpmjpt7vZeF1LnMZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "bl": "^4.0.3",
        "end-of-stream": "^1.4.1",
        "fs-constants": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.1.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tar/node_modules/minipass": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-5.0.0.tgz",
      "integrity": "sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==",
      "license": "ISC",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/through2": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/through2/-/through2-4.0.2.tgz",
      "integrity": "sha512-iOqSav00cVxEEICeD7TjLB1sueEL+81Wpzp2bY17uZjZN0pWZPuo4suZ/61VujxmqSGFfgOcNuTZ85QJwNZQpw==",
      "license": "MIT",
      "dependencies": {
        "readable-stream": "3"
      }
    },
    "node_modules/tree-kill": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
      "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
      "license": "MIT",
      "bin": {
        "tree-kill": "cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha512-McnNiV1l8RYeY8tBgEpuodCC1mLUdbSN+CYBL7kJsJNInOP8UjDDEwdk6Mw60vdLLrr5NHKZhMAOSrR2NZuQ+w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/undici-types": {
      "version": "7.10.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.10.0.tgz",
      "integrity": "sha512-t5Fy/nfn+14LuOc2KNYg75vZqClpAiqscVvMygNnlsHBFpSXdJaYtXMcdNLpl/Qvc3P2cB3s6lOV51nqsFq4ag==",
      "license": "MIT"
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/untildify": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/untildify/-/untildify-4.0.0.tgz",
      "integrity": "sha512-KK8xQ1mkzZeg9inewmFVDNkg3l5LUhoq9kN6iWYB/CC9YMG8HA+c1Q8HwDe6dEX7kErrEVNVBO3fWsVq5iDgtw==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/xml2js": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.6.2.tgz",
      "integrity": "sha512-T4rieHaC1EXcES0Kxxj4JWgaUQHDk+qwHcYOCFHfiwKz7tOVPLq7Hjq9dM1WCMhylqMEfP7hMcOIChvotiZegA==",
      "license": "MIT",
      "dependencies": {
        "sax": ">=0.6.0",
        "xmlbuilder": "~11.0.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/xml2js/node_modules/xmlbuilder": {
      "version": "11.0.1",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz",
      "integrity": "sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA==",
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/xmlbuilder": {
      "version": "15.1.1",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-15.1.1.tgz",
      "integrity": "sha512-yMqGBqtXyeN1e3TGYvgNgDVZ3j84W4cwkOXQswghol6APgZWaff9lnbvN7MHYJOiXsvGPXtjTYJEiC9J2wv9Eg==",
      "license": "MIT",
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC"
    },
    "node_modules/yauzl": {
      "version": "2.10.0",
      "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
      "integrity": "sha512-p4a9I6X6nu6IhoGmBqAcbJy1mlC4j27vEPZX9F4L4/vZT3Lyq1VkFHw/V/PUcB9Buo+DG3iHkT0x3Qya58zc3g==",
      "license": "MIT",
      "dependencies": {
        "buffer-crc32": "~0.2.3",
        "fd-slicer": "~1.1.0"
      }
    }
  }
}

```

### `package.json`

```json
{
  "name": "notas-htmx",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@capacitor-community/speech-recognition": "^7.0.1",
    "@capacitor/android": "^7.4.2",
    "@capacitor/cli": "^7.4.2",
    "@capacitor/core": "^7.4.2"
  },
  "devDependencies": {
    "cordova-res": "^0.15.4"
  }
}

```

### `www/index.html`

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#ffffff">

  <title>Notas 🐴</title>

  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- HTMX -->
  <script src="https://unpkg.com/htmx.org@1.9.12"></script>
  <!-- anime.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" defer></script>

  <!-- Shim: evita erros se app.* for chamado antes do app.js -->
  <script>
    window.app = window.app || {
      showList(){}, showForm(){}, showSettings(){},
      saveNote(){}, deleteNote(){}, deleteCurrentNote(){},
      importJSON(){}, exportJSON(){}
    };
  </script>

  <style>
    body { padding-bottom: 4.5rem; }
    :root {
      --color-surface:        #ffffff;
      --color-surface-muted:  #f1f5f9;
      --color-text:           #0f172a; /* sempre preto */
      --color-border:         #e2e8f0;
      --color-primary:        #0f766e;
      --color-primary-fg:     #ffffff;
      --color-danger:         #dc2626;
      --color-danger-fg:      #ffffff;
    }
    /* overlay do flash radial */
    #theme-flash {
      pointer-events: none;
      position: fixed; inset: 0;
      opacity: 0;
      background: radial-gradient(circle at var(--x,50%) var(--y,50%),
                  rgba(255,255,255,0.55), transparent 60%);
      mix-blend-mode: screen;
      z-index: 50;
    }
  </style>

  <script>
    const THEME_KEY = 'app_theme_vars_v4';

    const hsl = (h,s,l)=>`hsl(${Math.round(h)},${Math.round(s)}%,${Math.round(l)}%)`;
    const rand = (a,b)=>a+Math.random()*(b-a);
    const pick = (arr)=>arr[Math.floor(Math.random()*arr.length)];

    function applyThemeVars(vars){
      const root=document.documentElement;
      Object.entries(vars).forEach(([k,v])=>root.style.setProperty(`--${k}`,v));
    }
    function saveTheme(vars){ localStorage.setItem(THEME_KEY,JSON.stringify(vars)); }
    function loadTheme(){
      try{ return JSON.parse(localStorage.getItem(THEME_KEY)); }catch{ return null; }
    }

    // Tema vívido e aleatório; fundos também mudam; texto sempre preto
    function generateTheme(){
      const H = rand(0,360);
      const mode = pick(['complement','triad','analog']);
      const H_accent =
        mode==='complement' ? (H+180)%360 :
        mode==='triad'      ? (H+120)%360 :
                              (H+rand(20,40))%360;
      const H_danger = (H+pick([340,350,0,10,20]))%360;

      const sBase = rand(22,38);
      const surface        = hsl(H_accent, sBase, rand(90,96));
      const surfaceMuted   = hsl(H_accent, sBase+rand(4,12), rand(80,88));
      const border         = hsl(H_accent, sBase+rand(8,16), rand(68,78));
      const primary        = hsl(H, rand(70,92), rand(45,60));
      const danger         = hsl(H_danger, rand(70,92), rand(46,58));

      return {
        'color-surface':        surface,
        'color-surface-muted':  surfaceMuted,
        'color-border':         border,
        'color-text':           '#0f172a', // sempre preto
        'color-primary':        primary,
        'color-primary-fg':     '#ffffff',
        'color-danger':         danger,
        'color-danger-fg':      '#ffffff',
      };
    }

    // Interpolação animada das variáveis com anime.js (se disponível)
    function animateTheme(toVars, ev){
      const root = document.documentElement;
      const cur = (name)=>getComputedStyle(root).getPropertyValue(`--${name}`).trim();
      const keys = ['color-surface','color-surface-muted','color-border','color-primary','color-danger'];

      // flash radial opcional
      const flash = document.getElementById('theme-flash');
      if (flash && window.anime){
        const cx = (ev?.clientX ?? innerWidth/2) / innerWidth * 100 + '%';
        const cy = (ev?.clientY ?? innerHeight*0.3) / innerHeight * 100 + '%';
        flash.style.setProperty('--x', cx);
        flash.style.setProperty('--y', cy);
        anime({ targets: flash, opacity: [0,0.9,0], duration: 700, easing: 'easeOutQuad' });
      }

      if (!window.anime){
        applyThemeVars(toVars);
        return;
      }

      // parse hsl(...) -> {h,s,l}
      const toHSL = (v)=>{
        const m=v.match(/hsl\(([\d.]+),\s*([\d.]+)%?,\s*([\d.]+)%\)/i);
        if (m) return {h:+m[1], s:+m[2], l:+m[3]};
        return {h:0,s:0,l:100};
      };

      const from = {}, to = {};
      keys.forEach(k=>{
        from[k] = toHSL(cur(k));
        to[k]   = toHSL(toVars[k]);
      });

      anime({
        targets: {t:0},
        t: 1,
        duration: 900,
        easing: 'easeInOutCubic',
        update: anim=>{
          const p = anim.animations[0].currentValue;
          keys.forEach(k=>{
            const h = from[k].h + (to[k].h - from[k].h)*p;
            const s = from[k].s + (to[k].s - from[k].s)*p;
            const l = from[k].l + (to[k].l - from[k].l)*p;
            root.style.setProperty(`--${k}`, hsl(h,s,l));
          });
          root.style.setProperty('--color-text','#0f172a');
          root.style.setProperty('--color-primary-fg','#ffffff');
          root.style.setProperty('--color-danger-fg','#ffffff');
        }
      });

      // micro animações
      anime({
        targets: ['header','nav'],
        boxShadow: ['0 0 0 rgba(0,0,0,0)','0 10px 30px rgba(0,0,0,0.08)','0 0 0 rgba(0,0,0,0)'],
        duration: 900, easing: 'easeInOutQuad'
      });
      anime({
        targets: 'button, a, .card, .item',
        translateY: [6,0],
        opacity: [0.6,1],
        delay: anime.stagger(18),
        duration: 520,
        easing: 'easeOutCubic'
      });
    }

    // aplica o salvo cedo
    (function(){
      const saved = loadTheme();
      if (saved) applyThemeVars(saved);
    })();

    window.Theme = {
      randomize(ev){
        const vars = generateTheme();
        saveTheme(vars);
        animateTheme(vars, ev);
      },
      reset(){
        localStorage.removeItem(THEME_KEY);
        const defaults = {
          'color-surface':'#ffffff',
          'color-surface-muted':'#f1f5f9',
          'color-border':'#e2e8f0',
          'color-text':'#0f172a',
          'color-primary':'#0f766e',
          'color-primary-fg':'#ffffff',
          'color-danger':'#dc2626',
          'color-danger-fg':'#ffffff',
        };
        saveTheme(defaults);
        animateTheme(defaults);
      }
    };
  </script>
</head>

<body class="bg-[var(--color-surface)] text-[var(--color-text)] min-h-dvh">
  <div id="theme-flash"></div>

  <header class="bg-[var(--color-surface)] border-b border-[var(--color-border)] p-4">
    <div class="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
      <h1 class="text-lg font-semibold flex items-center gap-2">
        🐴 Notas HTMX 
      </h1>

      <!-- Ações de tema -->
      <div class="flex items-center gap-2">
        <button id="btn-theme-random"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-muted)] active:scale-95 transition"
          onclick="Theme.randomize(event)" title="Gerar tema aleatório e salvar">
          🎨
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 7h-9M14 17H4M20 12H4" />
          </svg>
          <span class="hidden sm:inline">Tema aleatório</span>
        </button>

        <button id="btn-theme-reset"
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-muted)] transition"
          onclick="Theme.reset()" title="Voltar ao tema padrão">
          ♻️
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 12a8 8 0 1 1-8-8" />
            <path d="M4 4v6h6" />
          </svg>
          <span class="hidden sm:inline">Resetar</span>
        </button>
      </div>
    </div>
  </header>

  <main id="main" class="max-w-2xl mx-auto px-4 py-4"
        hx-get="partials/notes_list.html"
        hx-trigger="load"
        hx-target="#main"
        hx-swap="innerHTML">
    <!-- htmx carrega a lista aqui -->
  </main>

  <nav class="fixed bottom-0 left-0 right-0 bg-[var(--color-surface)] border-t border-[var(--color-border)] pb-4">
    <div class="max-w-2xl mx-auto grid grid-cols-3">
      <button class="py-3 text-sm font-medium hover:bg-[var(--color-surface-muted)]"
              onclick="app.showList()">📄 Notas</button>
      <button class="py-3 text-sm font-medium hover:bg-[var(--color-surface-muted)]"
              onclick="app.showForm()">➕ Nova</button>
      <button class="py-3 text-sm font-medium hover:bg-[var(--color-surface-muted)]"
              onclick="app.showSettings()">⚙️ Config</button>
    </div>
  </nav>

  <!-- Aplica novamente o tema salvo ao final e anima entrada se anime.js existir -->
  <script>
    const savedAtEnd = loadTheme?.();
    if (savedAtEnd) applyThemeVars(savedAtEnd);

    if (window.anime){
      anime({ targets: 'header, nav', translateY: [-12,0], opacity: [0,1], duration: 600, easing: 'easeOutCubic' });
      anime({ targets: '#main', opacity: [0,1], scale: [0.98,1], duration: 700, delay: 120, easing: 'easeOutCubic' });
    }
  </script>

  <!-- seus módulos (mantidos) -->
  <script type="module" src="js/db.js"></script>
  <script type="module" src="js/app.js"></script>
</body>
</html>

```

### `www/js/app.js`

```javascript
import { NotesDB } from './db.js';

const $ = sel => document.querySelector(sel);

async function renderList() {
  const notes = await NotesDB.list();
  const list = $('#notesList');
  const empty = $('#emptyState');
  if (!list) return;

  list.innerHTML = '';

  if (!notes.length) {
    if (empty) empty.classList.remove('hidden');
    return;
  }
  if (empty) empty.classList.add('hidden');

  for (const n of notes) {
    const item = document.createElement('div');
    item.className = 'p-3 bg-white rounded-xl border border-slate-200';
    const date = new Date(n.updatedAt).toLocaleString();
    item.innerHTML = `
<div class="flex items-start gap-3">
  <div class="flex-1">
    <h3 class="font-medium">${escapeHTML(n.title || '(sem título)')}</h3>
    <p class="text-sm text-[var(--color-text)]/70 line-clamp-2">${escapeHTML(n.content || '')}</p>
    <p class="mt-1 text-xs text-[var(--color-text)]/50">${date}</p>
  </div>
  <div class="flex flex-col gap-2">
    <button class="px-2 py-1 border border-[var(--color-border)] rounded-lg text-sm bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]"
            onclick="app.showForm('${n.id}')">Editar</button>
    <button class="px-2 py-1 border border-[var(--color-danger)] text-[var(--color-danger)] rounded-lg text-sm hover:bg-[var(--color-surface-muted)]"
            onclick="app.deleteNote('${n.id}')">Excluir</button>
  </div>
</div>

    `;
    list.appendChild(item);
  }
}

function escapeHTML(s) {
  return (s || '').replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

async function showList() {
  await htmx.ajax('GET', 'partials/notes_list.html', { target: '#main', swap: 'innerHTML' });
}

async function showForm(id = null) {
  // carrega o formulário
  await htmx.ajax('GET', 'partials/note_form.html', { target: '#main', swap: 'innerHTML' });
  // se for edição, preenche
  if (id) {
    const n = await NotesDB.get(id);
    if (n) {
      $('#noteId').value = n.id;
      $('#title').value = n.title || '';
      $('#content').value = n.content || '';
      $('#deleteBtn')?.classList.remove('hidden');
    }
  } else {
    $('#deleteBtn')?.classList.add('hidden');
  }
}

async function saveNote(ev) {
  ev.preventDefault();
  const id = $('#noteId').value || `note-${Date.now()}-${Math.floor(Math.random()*100000)}`;
  const title = $('#title').value.trim();
  const content = $('#content').value;

  await NotesDB.upsert({ id, title, content });
  await showList();
  await renderList();
}

async function deleteNote(id) {
  if (!confirm('Excluir esta nota?')) return;
  await NotesDB.remove(id);
  await renderList();
}

async function deleteCurrentNote() {
  const id = $('#noteId').value;
  if (!id) return;
  await deleteNote(id);
  await showList();
}

async function showSettings() {
  await htmx.ajax('GET', 'partials/settings.html', { target: '#main', swap: 'innerHTML' });
}

async function exportJSON() {
  const data = await NotesDB.list();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `notas-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function importJSON(file) {
  if (!file) return;
  const text = await file.text();
  const list = JSON.parse(text);
  if (!Array.isArray(list)) {
    alert('Arquivo inválido.');
    return;
  }
  await NotesDB.bulkImport(list);
  alert('Importado com sucesso.');
  await showList();
  await renderList();
}

// integra com htmx: toda vez que conteúdo novo chegar ao #main,
// se existir #notesList, renderiza; se houver #noteForm, só garante botões etc.
document.body.addEventListener('htmx:load', () => {
  if ($('#notesList')) renderList();
});

window.app = {
  showList, showForm, saveNote,
  deleteNote, deleteCurrentNote,
  showSettings, exportJSON, importJSON,
  renderList
};

```

### `www/js/db.js`

```javascript
// db.js — wrapper simples para IndexedDB (sem libs)
const DB_NAME = 'notesdb';
const DB_VERSION = 1;
const STORE_NOTES = 'notes';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NOTES)) {
        const store = db.createObjectStore(STORE_NOTES, { keyPath: 'id' });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
        store.createIndex('title', 'title', { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function withStore(mode, fn) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NOTES, mode);
    const store = tx.objectStore(STORE_NOTES);
    const result = fn(store);
    tx.oncomplete = () => resolve(result);
    tx.onerror = () => reject(tx.error);
  });
}

export const NotesDB = {
  async list() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NOTES, 'readonly');
      const store = tx.objectStore(STORE_NOTES);
      const req = store.getAll();
      req.onsuccess = () => {
        const arr = req.result || [];
        arr.sort((a, b) => b.updatedAt - a.updatedAt);
        resolve(arr);
      };
      req.onerror = () => reject(req.error);
    });
  },

  async get(id) {
    return withStore('readonly', store => store.get(id))
      .then(req => new Promise((res, rej) => {
        req.onsuccess = () => res(req.result || null);
        req.onerror = () => rej(req.error);
      }));
  },

  async upsert(note) {
    note.updatedAt = Date.now();
    return withStore('readwrite', store => store.put(note));
  },

  async remove(id) {
    return withStore('readwrite', store => store.delete(id));
  },

  async bulkImport(list) {
    return withStore('readwrite', store => {
      list.forEach(n => {
        if (!n.id) n.id = crypto.randomUUID();
        if (!n.updatedAt) n.updatedAt = Date.now();
        store.put(n);
      });
    });
  }
};

```

### `www/partials/note_form.html`

```html
<section id="noteForm">
    <h2 class="text-lg font-semibold mb-3">Nota</h2>
  
    <form id="formNota" class="space-y-3" onsubmit="ensureTitleSync(); return app.saveNote(event)">
      <input type="hidden" id="noteId" />
  
      <!-- Campo oculto para título gerado automaticamente (fallback) -->
      <input type="hidden" id="note-title-hidden" />
  
      <div>
        <label class="block text-sm font-medium mb-1" for="title">Título</label>
        <input id="title" 
               class="w-full border border-[var(--color-border)] rounded-lg px-3 py-2 bg-[var(--color-surface)] text-[var(--color-text)] placeholder:text-[var(--color-text)]/50"
               placeholder="Ex.: Ideias para o projeto" required />
      </div>
  
      <div>
        <div class="flex items-center justify-between mb-1">
          <label class="block text-sm font-medium" for="content">Conteúdo</label>
  
          <!-- Botão do microfone -->
          <button type="button" id="mic-btn"
                  class="text-sm px-2 py-1 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]"
                  title="Ditado por voz">
            🎙️ Falar
          </button>
        </div>
  
        <textarea id="content" rows="8" 
                  class="w-full border border-[var(--color-border)] rounded-lg px-3 py-2 bg-[var(--color-surface)] text-[var(--color-text)] placeholder:text-[var(--color-text)]/50"
                  placeholder="Fale ou escreva aqui…"></textarea>
  
        <p id="speech-debug" class="mt-1 text-xs text-[var(--color-text)]/50"></p>
      </div>
  
      <div class="flex gap-2">
        <button type="submit"
                class="px-3 py-2 bg-[var(--color-primary)] text-[var(--color-primary-fg)] rounded-lg hover:opacity-90">
          Salvar
        </button>
        <button type="button"
                class="px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]"
                onclick="app.showList()">
          Cancelar
        </button>
        <button type="button" id="deleteBtn"
                class="ml-auto px-3 py-2 border border-[var(--color-danger)] text-[var(--color-danger)] rounded-lg hidden hover:bg-[var(--color-surface-muted)]"
                onclick="app.deleteCurrentNote()">
          Excluir
        </button>
      </div>
    </form>
  </section>
  
  <script>
  (function () {
    // Referências (mantendo IDs existentes do app)
    const form = document.getElementById('formNota');
    const ta   = document.getElementById('content');
    const mic  = document.getElementById('mic-btn');
    const dbg  = document.getElementById('speech-debug');
    const titleHidden = document.getElementById('note-title-hidden');
    const titleInput  = document.getElementById('title');
  
    const say = (m)=>{ if(dbg) dbg.textContent = m; console.log('[speech]', m); };
  
    // ---------- TÍTULO AUTO ----------
    function defaultTitle(){
      const d = new Date();
      const pad = (n)=> String(n).padStart(2,'0');
      return `Nota ${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }
    function makeTitleFromContent(txt){
      let firstLine = (txt || '').split(/\r?\n/).map(s=>s.trim()).find(Boolean) || '';
      firstLine = firstLine || txt.trim();
      if (!firstLine) return defaultTitle();
      return firstLine.replace(/\s+/g,' ').slice(0,60).trim() || defaultTitle();
    }
    function ensureTitle(){
      const txt = ta.value || '';
      const t = makeTitleFromContent(txt);
      // Se o título visível estiver vazio, usa o oculto como fallback
      if (titleInput && !titleInput.value.trim()) titleHidden.value = t;
      else titleHidden.value = '';
    }
    // Chamada pelo onsubmit do <form>
    window.ensureTitleSync = function(){
      ensureTitle();
      // Se ainda estiver vazio, preenche o visível com o gerado
      if (titleInput && !titleInput.value.trim() && titleHidden.value.trim()){
        titleInput.value = titleHidden.value.trim();
      }
    };
  
    ta.addEventListener('input', ensureTitle);
  
    // ---------- DETECÇÃO Capacitor x Web ----------
    const Cap = window.Capacitor;
    const isNative = !!(Cap && typeof Cap.isNativePlatform === 'function' && Cap.isNativePlatform());
    const SpeechPlugin = Cap && Cap.Plugins && Cap.Plugins.SpeechRecognition;
  
    let listening = false;
    let webRec = null;
  
    async function ensurePerms() {
      if (isNative && SpeechPlugin) {
        try {
          const p = await SpeechPlugin.checkPermissions();
          if (p.speechRecognition !== 'granted') await SpeechPlugin.requestPermissions();
        } catch (e) { console.warn(e); }
      }
    }
  
    // ---------- Fluxo nativo (Android via Capacitor) ----------
    async function startNative() {
      await ensurePerms();
      listening = true;
      mic.textContent = '🛑 Parar';
      say('Ouvindo (nativo)…');
      await SpeechPlugin.start({
        language: 'pt-BR',
        partialResults: true,
        popup: false,
        maxResults: 1,
        preferOffline: true
      });
    }
    async function stopNative() {
      listening = false;
      mic.textContent = '🎙️ Falar';
      say('Parado.');
      await SpeechPlugin.stop();
      autoSave();
    }
    if (isNative && SpeechPlugin && SpeechPlugin.addListener) {
      SpeechPlugin.addListener('partialResults', ({ matches }) => {
        if (matches?.length) {
          ta.value = matches[0];
          ensureTitle();
        }
      });
      SpeechPlugin.addListener('result', ({ matches }) => {
        if (matches?.length) {
          ta.value = matches[0];
          ensureTitle();
        }
      });
    }
  
    // ---------- Fluxo web (Chrome/Edge) ----------
    function startWeb() {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) { alert('Seu navegador não suporta ditado. No Android, use o app.'); return; }
      webRec = new SR();
      webRec.lang = 'pt-BR';
      webRec.interimResults = true;
      webRec.maxAlternatives = 1;
  
      webRec.onstart  = () => { say('Ouvindo (web)…'); };
      webRec.onerror  = (e) => { say('Erro: ' + (e.error || 'desconhecido')); };
      webRec.onresult = (e) => {
        const t = Array.from(e.results).map(r => r[0].transcript).join(' ');
        ta.value = t; ensureTitle();
      };
      webRec.onend    = () => {
        listening = false;
        mic.textContent = '🎙️ Falar';
        say('Parado.');
        autoSave();
      };
  
      listening = true;
      mic.textContent = '🛑 Parar';
      webRec.start();
    }
    function stopWeb() { if (webRec) webRec.stop(); }
  
    // ---------- TOGGLE ----------
    mic.addEventListener('click', (ev)=>{
      ev.preventDefault();
      if (!listening) { if (isNative && SpeechPlugin) startNative(); else startWeb(); }
      else { if (isNative && SpeechPlugin) stopNative(); else stopWeb(); }
    });
  
    // ---------- AUTO-SAVE (opcional) ----------
    function autoSave() {
      const txt = ta.value.trim();
      if (!txt) return;
      ensureTitle();
      // dispara o submit para o app salvar/renderizar
      form.requestSubmit();
    }
  
    // foco inicial
    setTimeout(()=>ta.focus(), 50);
  })();
  </script>
  
```

### `www/partials/notes_list.html`

```html
<section>
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-lg font-semibold">Minhas notas</h2>
      <button class="px-3 py-2 text-sm bg-slate-900 text-white rounded-lg"
              onclick="app.showForm()">+ Nova</button>
    </div>
  
    <div id="notesList" class="space-y-2">
      <!-- app.renderList() injeta os cards -->
    </div>
  
    <p id="emptyState" class="hidden text-slate-500 text-sm mt-4">
      Nenhuma nota ainda. Toque em “+ Nova” para criar.
    </p>
  </section>
  
```

### `www/partials/settings.html`

```html
<section>
    <h2 class="text-lg font-semibold mb-3">Configurações</h2>
    <div class="space-y-3 text-sm text-[var(--color-text)]">
      <p>Armazenamento: <strong>IndexedDB</strong> (offline)</p>
      
      <button class="px-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]"
              onclick="app.exportJSON()">
        Exportar notas (JSON)
      </button>
      
      <label class="block">
        <span class="text-sm">Importar JSON</span>
        <input type="file" accept="application/json"
               class="mt-1 text-[var(--color-text)] file:mr-2 file:px-3 file:py-1 file:border file:border-[var(--color-border)] file:rounded-lg file:bg-[var(--color-surface)] file:text-[var(--color-text)] hover:file:bg-[var(--color-surface-muted)]"
               onchange="app.importJSON(this.files[0])" />
      </label>
    </div>
  </section>
  
```

