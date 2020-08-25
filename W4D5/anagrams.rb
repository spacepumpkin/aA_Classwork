require 'byebug'
def first_anagram?(str1, str2)
    permutation(str1.split('')).any? {|el| el.join == str2}
end

def permutation(arr)   #n!
    return [arr] if arr.length < 2

    perms = []
    first = arr.shift
    subarr = permutation(arr)
    subarr.each do |el|
        (0..el.length).each do |i|
            perms << el.take(i) + [first] + el.drop(i)
        end
    end
    perms
end

def second_anagram?(str1,str2)   #n^2
    arr2 = str2.split('')
    str1.each_char do |char|
        idx = arr2.index(char)
        if idx
            arr2.delete_at(idx)  
        end
    end
    arr2.empty?
end

# p second_anagram?('cat','act')
# p second_anagram?('sdwe', 'awsd')

def third_anagram?(str1, str2)   #n log(n)
    arr1 =  str1.split('')
    arr2 =  str2.split('')
    arr1.sort == arr2.sort
end

p third_anagram?('cat','act')
p third_anagram?('sdwe', 'swet')

def fourth_anagram?(str1, str2) #n
    hash = Hash.new(0)
    str1.each_char {|char| hash[char] += 1 }
    str2.each_char {|char| hash[char] -= 1 }
    hash.values.all? {|el| el.zero?}
end

p fourth_anagram?('cat','act')
p fourth_anagram?('sdwe', 'swet')