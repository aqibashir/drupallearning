<?php

if (isset($_ENV['PRESSFLOW_SETTINGS'])) {
  $pressflow_settings = json_decode($_ENV['PRESSFLOW_SETTINGS'], TRUE);
}
elseif (isset($_SERVER['PRESSFLOW_SETTINGS'])) {
  $pressflow_settings = json_decode($_SERVER['PRESSFLOW_SETTINGS'], TRUE);
}
else {
  $pressflow_settings = [];
}

if (!empty($pressflow_settings['databases']['default']['default'])) {
  $databases['default']['default'] = $pressflow_settings['databases']['default']['default'];
}

if (!empty($pressflow_settings['conf']['pantheon_hash_salt'])) {
  $settings['hash_salt'] = $pressflow_settings['conf']['pantheon_hash_salt'];
}

$settings['file_private_path'] = 'sites/default/files/private';
$settings['file_temp_path'] = '/tmp';
