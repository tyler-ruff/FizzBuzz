# FizzBuzz Programming Test
# Language: Python
for i in range(0, 100):
  if i % 3 == 0 and i % 5 == 0: 
    print("FizzBuzz")
  else:
    if i % 3 == 0:
      print("Fizz")
    elif i % 5 == 0:
      print("Buzz")
    else:
      print(i)