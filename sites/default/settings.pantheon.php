<?php

if (isset($_ENV['PRESSFLOW_SETTINGS'])) {
  $pressflow_settings = json_decode($_ENV['PRESSFLOW_SETTINGS'], TRUE);
  foreach ($pressflow_settings as $key => $value) {
    $_SERVER[$key] = $value;
  }
}

if (isset($_SERVER['PRESSFLOW_SETTINGS'])) {
  $pressflow_settings = json_decode($_SERVER['PRESSFLOW_SETTINGS'], TRUE);
  foreach ($pressflow_settings as $key => $value) {
    $_SERVER[$key] = $value;
  }
}

if (isset($_SERVER['DB_HOST'])) {
  $databases['default']['default'] = [
    'database' => $_SERVER['DB_NAME'],
    'username' => $_SERVER['DB_USER'],
    'password' => $_SERVER['DB_PASSWORD'],
    'host' => $_SERVER['DB_HOST'],
    'port' => $_SERVER['DB_PORT'],
    'driver' => 'mysql',
    'prefix' => '',
    'collation' => 'utf8mb4_general_ci',
  ];
}

$settings['hash_salt'] = $_ENV['DRUPAL_HASH_SALT'] ?? $_SERVER['DRUPAL_HASH_SALT'] ?? 'pantheon';

$settings['file_private_path'] = 'sites/default/files/private';
$settings['file_temp_path'] = '/tmp';
