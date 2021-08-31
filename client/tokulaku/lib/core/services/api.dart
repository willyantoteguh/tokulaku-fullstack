import 'dart:convert';

import "package:http/http.dart" as http;

import '../../app/shared/api_routes.dart';

class API {
  final http.Client httpClient = http.Client();

  Future signUp(Map body) async {
    final String path = "$baseURL/api/user/signup";
    final Uri uri = Uri.parse(path);

    http.Response response = await httpClient.post(uri,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "Accept": "application/json"
        },
        body: jsonEncode(body));

    return response.body;
  }

   Future signIn(Map body) async {
    final String path = "$baseURL/api/user/signin";
    final Uri uri = Uri.parse(path);

    http.Response response = await httpClient.post(uri,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "Accept": "application/json"
        },
        body: jsonEncode(body));

    return response.body;
  }
}
