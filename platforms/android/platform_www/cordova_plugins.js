cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.telerik.plugins.nativepagetransitions.NativePageTransitions",
      "file": "plugins/com.telerik.plugins.nativepagetransitions/www/NativePageTransitions.js",
      "pluginId": "com.telerik.plugins.nativepagetransitions",
      "clobbers": [
        "window.plugins.nativepagetransitions"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
      "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
      "pluginId": "cordova-plugin-telerik-imagepicker",
      "clobbers": [
        "plugins.imagePicker"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.androidFileSystem",
      "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "mx.ferreyra.callnumber.CallNumber",
      "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
      "pluginId": "mx.ferreyra.callnumber",
      "clobbers": [
        "call"
      ]
    },
    {
      "id": "code-push.AcquisitionManager",
      "file": "plugins/code-push/script/acquisition-sdk.js",
      "pluginId": "code-push",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-code-push.codePush",
      "file": "plugins/cordova-plugin-code-push/bin/www/codePush.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "codePush"
      ]
    },
    {
      "id": "cordova-plugin-code-push.localPackage",
      "file": "plugins/cordova-plugin-code-push/bin/www/localPackage.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "LocalPackage"
      ]
    },
    {
      "id": "cordova-plugin-code-push.remotePackage",
      "file": "plugins/cordova-plugin-code-push/bin/www/remotePackage.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "RemotePackage"
      ]
    },
    {
      "id": "cordova-plugin-code-push.syncStatus",
      "file": "plugins/cordova-plugin-code-push/bin/www/syncStatus.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "SyncStatus"
      ]
    },
    {
      "id": "cordova-plugin-code-push.installMode",
      "file": "plugins/cordova-plugin-code-push/bin/www/installMode.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "InstallMode"
      ]
    },
    {
      "id": "cordova-plugin-code-push.codePushUtil",
      "file": "plugins/cordova-plugin-code-push/bin/www/codePushUtil.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.fileUtil",
      "file": "plugins/cordova-plugin-code-push/bin/www/fileUtil.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.httpRequester",
      "file": "plugins/cordova-plugin-code-push/bin/www/httpRequester.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.nativeAppInfo",
      "file": "plugins/cordova-plugin-code-push/bin/www/nativeAppInfo.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.package",
      "file": "plugins/cordova-plugin-code-push/bin/www/package.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.sdk",
      "file": "plugins/cordova-plugin-code-push/bin/www/sdk.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-appcenter-shared.AppCenter",
      "file": "plugins/cordova-plugin-appcenter-shared/www/AppCenter.js",
      "pluginId": "cordova-plugin-appcenter-shared",
      "clobbers": [
        "AppCenter"
      ]
    },
    {
      "id": "cordova-plugin-appcenter-analytics.Analytics",
      "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
      "pluginId": "cordova-plugin-appcenter-analytics",
      "clobbers": [
        "AppCenter.Analytics"
      ]
    },
    {
      "id": "cordova-plugin-appcenter-crashes.Crashes",
      "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
      "pluginId": "cordova-plugin-appcenter-crashes",
      "clobbers": [
        "AppCenter.Crashes"
      ]
    },
    {
      "id": "cordova-plugin-advanced-http.cookie-handler",
      "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.error-codes",
      "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.global-configs",
      "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.helpers",
      "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.js-util",
      "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.local-storage-store",
      "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.lodash",
      "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.messages",
      "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.public-interface",
      "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.tough-cookie",
      "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.url-util",
      "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.http",
      "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
      "pluginId": "cordova-plugin-advanced-http",
      "clobbers": [
        "cordova.plugin.http"
      ]
    },
    {
      "id": "cordova-plugin-file-transfer.FileTransferError",
      "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
      "pluginId": "cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransferError"
      ]
    },
    {
      "id": "cordova-plugin-file-transfer.FileTransfer",
      "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
      "pluginId": "cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransfer"
      ]
    },
    {
      "id": "cordova-plugin-zip.Zip",
      "file": "plugins/cordova-plugin-zip/zip.js",
      "pluginId": "cordova-plugin-zip",
      "clobbers": [
        "zip"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-preview-any-file.PreviewAnyFile",
      "file": "plugins/cordova-plugin-preview-any-file/www/preview.js",
      "pluginId": "cordova-plugin-preview-any-file",
      "clobbers": [
        "window.PreviewAnyFile"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Location",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.location"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.wifi"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.camera"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.notifications"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.microphone"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.contacts"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.calendar"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.nfc"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.external_storage"
      ]
    }
  ];
  module.exports.metadata = {
    "com.telerik.plugins.nativepagetransitions": "0.6.5",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.1.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-telerik-imagepicker": "2.3.3",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-file": "6.0.2",
    "onesignal-cordova-plugin": "2.6.0",
    "mx.ferreyra.callnumber": "0.0.2",
    "code-push": "3.0.1",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-code-push": "1.12.0",
    "cordova-plugin-appcenter-shared": "0.5.0",
    "cordova-plugin-appcenter-analytics": "0.5.0",
    "cordova-plugin-appcenter-crashes": "0.5.0",
    "cordova-plugin-advanced-http": "2.2.0",
    "cordova-plugin-file-transfer": "1.7.1",
    "cordova-plugin-zip": "3.1.0",
    "cordova-plugin-inappbrowser": "3.1.0",
    "cordova-plugin-preview-any-file": "0.1.6",
    "cordova.plugins.diagnostic": "5.0.2"
  };
});