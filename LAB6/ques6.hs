filterandmap :: (a -> Bool) -> (a -> b) -> [a] -> [b]
filterandmap predicate mapper = map mapper . filter predicate

doubleevens :: [Int] -> [Int]
doubleevens = filterandmap even (*2)

main :: IO ()
main = print (doubleevens [1, 2, 3, 4, 5, 6])
