INSERT INTO users (email, pass_salt, pass_hash) VALUES
  ('prueba@example.com', 'de19ebf2-f8f6-41d7-b260-9280cc29d5fe', 'de53a1ae73197ac1b06ad265eef35246'),
  ('test@example.com', 'd6fb4b6b-07bd-43c7-b6e5-5adada3abb0a', 'f13a42105f0f8d29784a3f8b6315563b'),
  ('mario@example.com', '76b32513-36b4-47ae-8f36-14326dbb8068', '744ac19f26abdb60901ff2e71e8a8352');


INSERT INTO photos (photos_id, author_id, name_author, src_original, src_tiny, height, width) VALUES 
  (2477357, 1065076, 'Nishant Aneja', 'https://images.pexels.com/photos/2477357/pexels-photo-2477357.jpeg', 'https://images.pexels.com/photos/2477357/pexels-photo-2477357.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 2400, 3600),
  (3556533, 401691, 'Oladimeji Ajegbile', 'https://images.pexels.com/photos/3556533/pexels-photo-3556533.jpeg', 'https://images.pexels.com/photos/3556533/pexels-photo-3556533.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 4032, 3024),
  (1820656, 895836, 'Frank K', 'https://images.pexels.com/photos/1820656/pexels-photo-1820656.jpeg', 'https://images.pexels.com/photos/1820656/pexels-photo-1820656.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 4928, 3264),
  (4557388, 1984515, 'Anna Shvets', 'https://images.pexels.com/photos/4557388/pexels-photo-4557388.jpeg', 'https://images.pexels.com/photos/4557388/pexels-photo-4557388.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 6240, 4160),
  (3215010, 1664241, 'Alex Azabache', 'https://images.pexels.com/photos/3215010/pexels-photo-3215010.jpeg', 'https://images.pexels.com/photos/3215010/pexels-photo-3215010.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 4010, 3208),
  (3214734, 1653327, 'Ralph Rabago', 'https://images.pexels.com/photos/3214734/pexels-photo-3214734.jpeg', 'https://images.pexels.com/photos/3214734/pexels-photo-3214734.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 6164, 3467),
  (3867093, 430381, 'RF._.studio', 'https://images.pexels.com/photos/3867093/pexels-photo-3867093.jpeg', 'https://images.pexels.com/photos/3867093/pexels-photo-3867093.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 4800, 3202),
  (3618732, 430381, 'RF._.studio', 'https://images.pexels.com/photos/3618732/pexels-photo-3618732.jpeg', 'https://images.pexels.com/photos/3618732/pexels-photo-3618732.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280', 3448, 5168);


INSERT INTO videos (videos_id, author_id, name_author, link, filetype, height, width) VALUES 
  (394858, 1849359, 'Dee  Willi', 'https://player.vimeo.com/external/389768344.hd.mp4?s=00f9a5e84092c5420407c2ebc9ff122e894f593d&profile_id=174&oauth2_token_id=57447761', 'video/mp4', 1920,  720),
  (420591, 102775, 'Magda Ehlers', 'https://player.vimeo.com/external/392338501.sd.mp4?s=6e67abd3a0c6b8cc476c348a5a4559bdb9e909e3&profile_id=165&oauth2_token_id=57447761', 'video/mp4', 540, 960),
  (410080, 354684, 'Zuzanna  Musial', 'https://player.vimeo.com/external/391712321.hd.mp4?s=f467fb2cd059c56c9e910c51b2937227247e3a06&profile_id=175&oauth2_token_id=57447761', 'video/mp4', 1080, 1920),
  (46266, 354684, 'Zuzanna  Musial', 'https://player.vimeo.com/external/278351351.sd.mp4?s=3172e3c8106024de61ac2473e44cc57168c3b8af&profile_id=164&oauth2_token_id=57447761', 'video/mp4', 360, 640),
  (22729, 2659, 'Pixabay', 'https://player.vimeo.com/external/219330628.hd.mp4?s=6b3ec63c17971d84a1002c68179538a2afa87672&profile_id=119&oauth2_token_id=57447761', 'video/mp4', 1080, 1920),
  (142565, 354684, 'Zuzanna  Musial', 'https://player.vimeo.com/external/349219295.sd.mp4?s=5cb404e6080175ffefef08092448336d29c28b5b&profile_id=164&oauth2_token_id=57447761', 'video/mp4', 360, 640),
  (217060, 1179532, 'Kelly Lacy', 'https://player.vimeo.com/external/365833826.hd.mp4?s=0bd64720a4306aaa316cf275708e004ea7da6977&profile_id=174&oauth2_token_id=57447761', 'video/mp4', 720, 1366),
  (1434595, 2815449, 'albert Patten', 'https://player.vimeo.com/external/463902493.sd.mp4?s=48a87ec1a0932b191943a649844810455d7a7c13&profile_id=165&oauth2_token_id=57447761', 'video/mp4', 540, 960);


INSERT INTO ratingphotos (user_id, photos_id, rating_value) VALUES
  (1, 2477357, 3),
  (1, 3556533, 4),
  (2, 1820656, 2),
  (2, 4557388, 3),
  (3, 3214734, 5),
  (3, 3867093, 4);


INSERT INTO ratingvideos (user_id, videos_id, rating_value) VALUES
  (1, 394858, 3),
  (1, 410080, 4),
  (2, 22729, 2),
  (2, 142565, 3),
  (3, 420591, 5),
  (3, 1434595, 4);

  

