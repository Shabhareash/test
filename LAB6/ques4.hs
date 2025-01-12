filterandfold :: (a -> Bool) -> (b -> a -> b) -> b -> [a] -> b
filterandfold predicate foldFunc init = foldl foldFunc init . filter predicate
sumofodds :: [Int] -> Int
sumofodds = filterandfold odd (+) 0
main :: IO ()
main = print (sumofodds [1, 2, 3, 4, 5, 6])




