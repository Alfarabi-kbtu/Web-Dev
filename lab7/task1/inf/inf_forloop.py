"""
Problem A
first = int(input())
second = int(input())
if ( first < second):
    for i in range(first, second):
        if (i%2==0):
            print(i, end=" ")
else:
    print("Sorry, input error!")
"""
"""
Problem B
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range (a, b):
    if (i%d==c):
        print(i, end=" ")
"""
"""
Problem C
first = int(input())
second = int(input())
for i in range(first, second + 1):
    root = int(i ** 0.5)
    if root * root == i:
        print(i, end=" ")
"""
"""
Problem D
x = input()
d = input()
print(x.count(d))
"""
"""
Problem E
number = int(input())
summary = 0
for digit in str(number):
    summary += int(digit)
print(summary)
"""
"""
Problem F
x = int(input())
print(int(str(x)[::-1]))
"""
"""
Problem G
number = int(input())
if (number >= 2 and number <= 30000):
    for i in range (2, number+1):
        if (number%i==0):
            print(i)
            break
"""
"""
Problem H
number = int(input())
if (number >= 2 and number <= 30000):
    for i in range (1, number+1):
        if (number%i==0):
            print(i)
"""            
"""
Problem I
sum = 0
number = int(input())
if (number >= 2 and number <= 30000):
    for i in range (1, number+1):
        if (number%i==0):
            sum += 1
print(sum)
"""
"""
Problem J
summary = 0
for i in range (100):
    num = int(input())
    summary += num
print(summary)
"""
"""
Problem K
count = int(input())
summary = 0
for i in range (count):
    num = int(input())
    summary += num
print(summary)
"""
"""
Problem L
n = input()
result = 0
power = 0

for digit in reversed(n):      
    result += int(digit) * (2 ** power)
    power += 1

print(result)
"""

"""
Problem M
summary = 0
count = int(input())
for i in range (count):
    num = int(input())
    if (num==0):
        summary += 1
print(summary)
"""

































