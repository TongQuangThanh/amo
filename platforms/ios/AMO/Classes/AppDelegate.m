/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

//
//  AppDelegate.m
//  AMO
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//  Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
//

#import "AppDelegate.h"
#import "MainViewController.h"
//#import <OneSignal/OneSignal.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
//    [OneSignal initWithLaunchOptions:launchOptions
//                               appId:@"712abf97-1cbe-442b-8c16-d10e29e292a4"
//                  handleNotificationAction:nil
//                             settings:@{kOSSettingsKeyAutoPrompt: @false}];
//    OneSignal.inFocusDisplayType = OSNotificationDisplayTypeNotification;
//    
//    // Recommend moving the below line to prompt for push after informing the user about
//    //   how your app will use them.
//    [OneSignal promptForPushNotificationsWithUserResponse:^(BOOL accepted) {
//         NSLog(@"User accepted notifications: %d", accepted);
//    }];
    
    self.viewController = [[MainViewController alloc] init];
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

@end
