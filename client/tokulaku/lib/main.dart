import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tokulaku/app/providers.dart';

import 'meta/views/splash_screen/splash_view.dart';

void main() {
  runApp( MyApp());
}

class MyApp extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: providers,
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(fontFamily: 'Montserrat'),
        home: SplashView(),
      ),
    );
  }
}