import 'dart:async';

import 'package:flutter/material.dart';
import 'package:tokulaku/app/shared/colors.dart';
import 'package:page_transition/page_transition.dart';
import 'package:tokulaku/app/shared/style.dart';
import 'package:tokulaku/meta/views/auth/signup_view.dart';

class SplashView extends StatefulWidget {


  @override
  State<SplashView> createState() => _SplashViewState();
}

class _SplashViewState extends State<SplashView> {
  @override
  void initState() {
    Timer(
        const Duration(seconds: 2),
        () => Navigator.pushReplacement(
            context,
            PageTransition(
                child: SignUpView(), type: PageTransitionType.leftToRight)));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: darkColor,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              'Tokulaku',
              style:
                  whiteText.copyWith(fontSize: 50, fontWeight: FontWeight.w800),
            )
          ],
        ),
      ),
    );
  }
}
