import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://vyvbsqiagonlqwkxdbhx.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImU1ODBjY2RlLTk0MWUtNDQ2OS04ZmMxLTM1NTUzMzllYmY0ZiJ9.eyJwcm9qZWN0SWQiOiJ2eXZic3FpYWdvbmxxd2t4ZGJoeCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc1NDIzMTg3LCJleHAiOjIwOTA3ODMxODcsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.gWakOPASvc8GE98dkWrjAJY5lO9oKmq_kQSg01YSedM';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };