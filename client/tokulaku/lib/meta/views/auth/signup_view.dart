import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

import '../../../app/shared/colors.dart';
import '../../../app/shared/dimensions.dart';
import '../../../app/shared/style.dart';
import 'signin_view.dart';

// ignore: use_key_in_widget_constructors
class SignUpView extends StatelessWidget {
  final nameController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: darkColor,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          // ignore: prefer_const_literals_to_create_immutables
          children: [
            vSizedBox3,
            vSizedBox1,
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  IconButton(
                      onPressed: () {},
                      icon: Icon(
                        EvaIcons.arrowIosBackOutline,
                        color: whiteColor,
                      ))
                ],
              ),
            ),
            vSizedBox4,
            Container(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Hey there!',
                      style: whiteText.copyWith(
                          fontSize: 40, fontWeight: FontWeight.w900)),
                  Text('Welcome to the Tokulaku',
                      style: whiteText.copyWith(
                          fontSize: 26, fontWeight: FontWeight.w500)),
                  Text('Fill in your details.',
                      style: whiteText.copyWith(
                          fontSize: 26, fontWeight: FontWeight.w300)),
                ],
              ),
            ),
            vSizedBox3,
            vSizedBox1,
            // ignore: avoid_unnecessary_containers
            Container(
              child: Column(
                children: [
                  vSizedBox1,
                  buildTextField("Name", nameController),
                  vSizedBox1,
                  buildTextField("Email", emailController),
                  vSizedBox1,
                  buildTextField("Password", passwordController)
                ],
              ),
            ),
            vSizedBox4,
            Container(
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    RichText(
                      text: TextSpan(children: <TextSpan>[
                        TextSpan(
                            text: "Already have an account? ",
                            style: greyText.copyWith(
                                fontWeight: FontWeight.w700,
                                fontFamily: "Montserrat")),
                        TextSpan(
                            text: "Sign In ",
                            recognizer: TapGestureRecognizer()
                              ..onTap = () {
                                Navigator.pushReplacement(
                                    context,
                                    PageTransition(
                                        child: SignInView(),
                                        type: PageTransitionType.rightToLeft));
                              },
                            style: greyText.copyWith(
                                fontSize: 16,
                                decoration: TextDecoration.underline,
                                fontWeight: FontWeight.bold,
                                fontFamily: "Montserrat"))
                      ]),
                    ),
                    vSizedBox2,
                    Container(
                      width: 300.0,
                      height: 50.0,
                      decoration: BoxDecoration(
                          color: whiteColor.withOpacity(1),
                          borderRadius: BorderRadius.circular(18.0)),
                      child: Center(
                        child: Text("Sign Up",
                            style: defaultText.copyWith(
                                fontSize: 18,
                                fontWeight: FontWeight.w900,
                                fontFamily: "Montserrat")),
                      ),
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  buildTextField(String text, TextEditingController textEditingController) {
    return TextField(
      controller: textEditingController,
      style: whiteText.copyWith(fontSize: 18),
      decoration: InputDecoration(
          suffixIcon: IconButton(
            onPressed: () {},
            icon: Icon(
              EvaIcons.backspace,
              color: textColor,
            ),
          ),
          filled: true,
          hintText: text,
          hintStyle: greyText.copyWith(fontSize: 14),
          border: const OutlineInputBorder(
              borderSide: BorderSide.none,
              borderRadius: BorderRadius.all(Radius.circular(15.0)))),
    );
  }
}
