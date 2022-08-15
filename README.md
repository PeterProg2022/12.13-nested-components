
diff --git a/.gitignore b/.gitignore
new file mode 100644

diff --git a/ui/package.json b/ui/package.json
-    "start": "node dist/server.js",
+    "start": "node api/index.js",

diff --git a/ui/public/env.js b/ui/public/env.js
new file mode 100644

diff --git a/ui/sample.env b/ui/sample.env
deleted file mode 100644

diff --git a/ui/src/.eslintrc b/ui/src/.eslintrc
+    "react/prop-types": "off",
+    "react/jsx-no-bind": ["error",{
+      "ignoreDOMComponents": true,
+      "ignoreRefs": true,
+      "allowArrowFunctions": true,
+      "allowFunctions": true,
+      "allowBind": true
+    }]

diff --git a/ui/vercel.json b/ui/vercel.json
new file mode 100644

diff --git a/ui/webpack.config.js b/ui/webpack.config.js
-    filename: 'server.js',
-    path: path.resolve(__dirname, 'dist'),
+    filename: 'index.js',
+    path: path.resolve(__dirname, 'api'),