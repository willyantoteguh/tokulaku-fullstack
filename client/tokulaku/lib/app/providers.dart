import 'package:tokulaku/core/providers/auth_provider.dart';

import '';
import 'package:provider/provider.dart';
import 'package:provider/single_child_widget.dart';

List<SingleChildWidget> providers = [

  ...remoteProviders

];

List<SingleChildWidget> remoteProviders = [
  ChangeNotifierProvider(create: (_) => AuthProvider())
];
