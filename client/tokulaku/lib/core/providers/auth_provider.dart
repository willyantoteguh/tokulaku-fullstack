import 'package:flutter/material.dart';
import 'package:tokulaku/core/services/api.dart';

class AuthProvider extends ChangeNotifier {
  final API _api = API();

  signUp(Map body) async {
    try {
      _api.signUp(body).then((authData) {
        print(authData);
      });
    } catch (error) {
      // Add Error Widget
      print(error);
    }
  }

  signIn(Map body) async {
    try {
      _api.signIn(body).then((authData) {
        print(authData);
      });
    } catch (error) {
      // Add Error Widget
      print(error);
    }
  }
}
